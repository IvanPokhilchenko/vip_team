import React, { useState } from 'react';
import './DiscountForm.css';
import { useForm } from 'react-hook-form';

function DiscountForm() {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);


  const onSubmit = (data) => {
    console.log(data); 
    setIsSubmitted(true); 
    reset();
  };

  return (
    <div className='discount-form-container'>
      <h1 className='first-oder-h1'>5% off on the first order</h1>
      <div className='container-img-input'>
        <div className='discount-image'></div>
        {/* ref={register} */}
        <form className='input-form' onSubmit={handleSubmit(onSubmit)}>
          <input className='input-g' type="text" name='name' placeholder='Name' {...register("name", { required: "This input is required", minLength: {value: 3, message: "Minimum length is 3 symbols"}, maxLength: {value: 20, message: "Maximum length is 20 symbols"}, })} />
          <div>{ errors.name && <p>{errors.name.message}</p> }</div>
          <input className='input-g' type="tel" name='phone' placeholder='Phone number' {...register("phone", { required: "This input is required", minLength: {value: 3, message: "Minimum length is 3 symbols"}, maxLength: {value: 20, message: "Maximum length is 20 symbols"}, })}/>
          <div>{ errors.phone && <p>{errors.phone.message}</p> }</div>
          <input className='input-g' type="email" name='email' placeholder='Email' {...register("email", { required: "This input is required", minLength: {value: 3, message: "Minimum length is 3 symbols"}, maxLength: {value: 40, message: "Maximum length is 20 symbols"}, })}/>
          <div>{ errors.email && <p>{errors.email.message}</p> }</div>
          <button className='button-discount' type='submit'>{isSubmitted ? 'Request Submitted' : 'Get a discount'}</button>
        </form>
      </div>
    </div>
  );
}

export default DiscountForm;