'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Image from 'next/image';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import ErrorIcon from '../../../public/icons/error.svg';

type Inputs = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  consent: boolean;
};

const initValues = {
  fullName: '',
  email: '',
  position: '',
  phone: '',
  message: '',
  consent: false,
};

export default function CareerForm() {
  const fullNameRegexp = /^[A-Za-z\s]+$/;
  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegexp = /^0[ \-\d]+$/;
  const [storage, setStorage] = useLocalStorage('formValues', initValues);
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: storage,
  });

  const formData = watch();

  useEffect(() => {
    if (!isLoaded) {
      reset(storage);
      setIsLoaded(true);
    }
  }, [storage, reset, isLoaded]);

  const onChange = () => {
    setStorage(formData);
  };

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    toast.success('Form submitted successfully');
    reset(initValues);
    localStorage.clear();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={onChange}
      className="flex flex-col gap-4 lg:gap-9"
    >
      <Toaster />
      <div className="flex flex-col gap-4 [&>input]:block font-extralight md:flex-row">
        <div className="flex flex-col gap-4 lg:gap-6 [&>input]:block font-extralight md:w-[221px] lg:w-[290px]">
          <label
            className={`flex flex-col gap-2 relative text-xs leading-[2] tracking-[2.4px] ${
              errors.fullName ? 'text-error' : ''
            }`}
          >
            Full Name
            <input
              type="text"
              {...register('fullName', {
                required: 'full name is required',
                pattern: {
                  value: fullNameRegexp,
                  message: 'Incorrect name',
                },
              })}
              className={`w-full py-[2px] px-2 bg-input h-6  lg:h-[28px] font-extralight text-[13px] leading-[1.8] lg:text-[20px] lg:leading-[1.2] placeholder:opacity-[0.2] placeholder:text-[13px] placeholder:leading-[1.8] placeholder:font-extralight lg:placeholder:text-[20px] lg:placeholder:leading-[1.2] ${
                errors.fullName ? 'text-error' : 'text-white'
              }`}
              placeholder="John Smith"
            />
            {errors.fullName && (
              <div className="flex gap-2 items-center absolute right-0 top-[56px] lg:top-[60px]">
                <ErrorIcon
                  className="w-[18px] h-[18px]"
                  aria-label="error-icon"
                />
                <span className="text-error text-xs leading-[2] tracking-[2.4px]">
                  {errors.fullName.message}
                </span>
              </div>
            )}
          </label>

          <label
            className={`flex flex-col gap-2 relative text-xs leading-[2] tracking-[2.4px] ${
              errors.email ? 'text-error' : ''
            }`}
          >
            E-mail
            <input
              type="email"
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value: emailRegexp,
                  message: 'Invalid e-mail',
                },
              })}
              className={`w-full py-[2px] px-2 bg-input h-6 lg:h-[28px] font-extralight text-[13px] leading-[1.8] lg:text-[20px] lg:leading-[1.2] placeholder:opacity-[0.2] placeholder:text-[13px] placeholder:leading-[1.8] placeholder:font-extralight lg:placeholder:text-[20px] lg:placeholder:leading-[1.2] ${
                errors.email ? ' text-error' : 'text-white '
              }`}
              placeholder="johnsmith@email.com"
            />
            {errors.email && (
              <div className="flex gap-1 items-center absolute right-0 top-[56px] lg:top-[60px]">
                <ErrorIcon
                  className="w-[18px] h-[18px]"
                  aria-label="error-icon"
                />
                <span className="text-error text-xs leading-[2] tracking-[2.4px]">
                  {errors.email.message}
                </span>
              </div>
            )}
          </label>

          <label className="flex flex-col gap-2 relative text-xs leading-[2] tracking-[2.4px]">
            Position
            <input
              type="text"
              id="position"
              {...register('position')}
              className="w-full py-[2px] px-2 bg-input h-6 lg:h-[28px] font-extralight text-[13px] leading-[1.8] lg:text-[20px] lg:leading-[1.2] placeholder:opacity-[0.2] placeholder:text-[13px] placeholder:leading-[1.8] placeholder:font-extralight lg:placeholder:text-[20px] lg:placeholder:leading-[1.2]"
              placeholder="Movie maker"
            />
          </label>

          <label
            htmlFor="phone"
            className={`phone-label flex gap-2 flex-col relative text-xs leading-[2] tracking-[2.4px] ${
              errors.phone ? 'text-error' : ''
            }`}
          >
            Phone
            <input
              type="tel"
              id="phone"
              {...register('phone', {
                required: 'phone is required',
                pattern: {
                  value: phoneRegexp,
                  message: 'Invalid phone',
                },
              })}
              className={`w-full py-[2px] px-2 pl-9 lg:pl-12 bg-input h-6 lg:h-[28px] font-extralight text-[13px] leading-[1.8] lg:text-[20px] lg:leading-[1.2] placeholder:opacity-[0.2] placeholder:text-[13px] placeholder:leading-[1.8] placeholder:font-extralight lg:placeholder:text-[20px] lg:placeholder:leading-[1.2] ${
                errors.phone ? ' text-error' : 'text-white'
              }`}
              placeholder="(097) 12 34 567"
            />
            {errors.phone && (
              <div className="flex gap-2 items-center absolute right-0 top-[56px] lg:top-[60px]">
                <ErrorIcon
                  className="w-[18px] h-[18px]"
                  aria-label="error-icon"
                />
                <span className="text-error text-xs leading-[2] tracking-[2.4px]">
                  {errors.phone.message}
                </span>
              </div>
            )}
          </label>
        </div>
        <label
          htmlFor="message"
          className="flex flex-col gap-2 relative text-xs leading-[2] tracking-[2.4px]"
        >
          Message
          <textarea
            id="message"
            {...register('message')}
            className="w-full  px-2 bg-input h-[196px] md:w-[221px] lg:w-[290px] md:h-full  text-white placeholder:opacity-[0.2] resize-none"
          />
        </label>
      </div>
      <div className="flex flex-col smMax: gap-4 md:flex-row md:justify-between">
        <input
          type="checkbox"
          {...register('consent')}
          className="mr-2 check"
          id="agreement"
        />
        <label
          className="flex pl-8 font-extralight text-xs agreement-label relative leading-[1.8]"
          htmlFor="agreement"
        >
          <Image
            src={'/icons/unchecked.svg'}
            width={24}
            height={24}
            alt="unchecked-checkbox"
            className="checkbox unchecked"
          />
          <Image
            src={'/icons/checked.svg'}
            width={24}
            height={24}
            alt="checked-checkbox"
            className="checkbox checked"
          />
          <span className=" w-[250px] md:w-[192px] lg:w-[258px]">
            I confirm my consent to the processing of personal data.
          </span>
        </label>

        <button
          type="submit"
          className="text-[30px] font-medium block  smMax:ml-auto md:self-start hover:opacity-[0.5] focus:opacity-[0.5] duration-300"
        >
          SEND
        </button>
      </div>
    </form>
  );
}
