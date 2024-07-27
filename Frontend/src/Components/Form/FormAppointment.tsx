import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useForm } from '../../Hooks/FormUtils.hook';
import { handleAppointment } from '../../Services/Appointment';
import AppointmentInput from '../Inputs/AppointmentInput';
import ChoiceBox from '../Inputs/ChoiceBox';

interface Doctor {
  _id: string;
  _name: string;
}

const FormAppointment = () => {
  const _id = localStorage.getItem('_id');
  const { enqueueSnackbar } = useSnackbar();
  const { formData, handleChange, handleSubmit } = useForm({
    _doctor: '',
    _appDate: '',
    _appTime: '',
    _name: `${_id}`,
  });
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3001/api/doctor/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setDoctors(result.data);
      } catch (error) {
        setError('Failed to fetch doctors');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const submitting = async () => {
    try {
      const result = await handleAppointment(formData);
      console.log(result);
      if (result) {
        enqueueSnackbar('Successfully Registering', {
          variant: 'success',
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar('Failed Registering', {
          variant: 'error',
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 grid place-items-start ">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            submitting();
          }}
        >
          <ChoiceBox
            name="_doctor"
            handleChange={handleChange}
            title="Pick A Doctor"
          >
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._name}>
                {doctor._name}
              </option>
            ))}
          </ChoiceBox>
          <AppointmentInput
            type="date"
            name="_appDate"
            placeholder="Appointment Date"
            title="Appointment Date"
            handleChange={handleChange}
          />
          <ChoiceBox
            name="_appTime"
            handleChange={handleChange}
            title="Appointment Time"
          >
            <option value="10.00 - 12.00">10.00 - 12.00</option>
            <option value="12.00 - 14.00">12.00 - 14.00</option>
            <option value="14.00 - 16.00">14.00 - 16.00</option>
          </ChoiceBox>
          <button className="rounded-full bg-green-700 text-white p-1">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FormAppointment;
