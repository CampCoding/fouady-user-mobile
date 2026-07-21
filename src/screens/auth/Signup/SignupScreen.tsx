import React from 'react';
import SignupScreenUI from './SignupScreen_UI';
import useSignupScreen from './SignupScreen.hooks';

const SignupScreen = () => {
  const {
    name,
    setName,
    phone,
    setPhone,
    job,
    setJob,
    work_place,
    setWork_place,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    errors,
    setErrors,
    handleChangePassword,
    goBack,
  } = useSignupScreen();

  return (
    <SignupScreenUI
      name={name}
      setName={setName}
      phone={phone}
      setPhone={setPhone}
      job={job}
      setJob={setJob}
      work_place={work_place}
      setWork_place={setWork_place}
      password={password}
      setPassword={setPassword}
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      confirm_new_password={''}
      setConfirm_new_password={()=>{}}
      errors={errors}
      setErrors={setErrors}
      handleChangePassword={handleChangePassword}
      goBack={goBack}
    />
  );
};

export default SignupScreen;
