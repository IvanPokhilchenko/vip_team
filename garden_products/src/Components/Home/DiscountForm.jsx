import React from 'react';
import './DiscountForm.css';
import { useForm } from 'react-hook-form';

function DiscountForm() {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='discount-form-container'>
      <h1 className='first-oder-h1'>5% off on the first order</h1>
      <div className='container-img-input'>
        <div className='discount-image'></div>
        {/* ref={register} */}
        <form className='input-form' onSubmit={handleSubmit(onSubmit)}>
          <input className='input-g' type="text" name='name' placeholder='Name' />

          <input className='input-g' type="tel" name='phone' placeholder='Phone number' />

          <input className='input-g' type="email" name='email' placeholder='Email' />

          <button className='button-discount' type='submit'>Get a discount</button>
        </form>
      </div>
    </div>
  );
}

export default DiscountForm;