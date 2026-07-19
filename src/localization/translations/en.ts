const en = {
  translation: {
    // App
    app_name: 'Fouadi',

    // Auth - Login
    login_subtitle: 'Login',
    login_hint: 'Choose your account type then enter your data',

    // Language button
    lang_label: 'English',
    patient: 'Patient',
    doctor: 'Doctor',
    phone_number:'Email or Phone Number',
    first_time_login_hint:'If you are using the app for the first time, the default password is the same as the registered phone number, and you can change it later to protect your account.',
    reports:'My Appointments and Reports',
    Schedule:'My Patients and Appointments',
    password:'Password',
    login:'Login as Patient',
    change_pass:'Change Password',
    forget_password:'Forget Password',
    new_account:'New Account',
    // Validation errors
    phone_required:'Phone number is required',
    password_required:'Password is required',
    password_min:'Password must be at least 6 characters',
    
  },
} as const;

export default en;
