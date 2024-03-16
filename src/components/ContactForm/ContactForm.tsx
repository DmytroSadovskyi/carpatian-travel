'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { Toaster, toast } from 'react-hot-toast';
import ErrorIcon from '../../../public/icons/error.svg';
import { sendMessage } from '@/api/telegram';

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const fullNameRegexp = /^[A-Za-z\s]+$/;
  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  useFormPersist('contactFormValues', {
    watch,
    setValue,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined, // default window.sessionStorage
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await sendMessage(JSON.stringify(data));
      toast.success('Form submitted successfully');
      reset();
    } catch (error) {
      toast.error('Failed to submit form. Please try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  lg:max-w-[607px] lg:w-full lg:ml-auto"
    >
      <Toaster />
      <div className="flex flex-col gap-4 mb-[16px] [&>input]:block font-extralight md:flex-row lg:flex-col lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-4 md:gap-[28px] [&>input]:block font-extralight mdMax:w-[221px]  lg:flex-row lg:gap-5 ">
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
              className={`w-full py-[2px] px-2 bg-input h-6 lg:h-[28px] lg:w-[293px] font-extralight text-[13px] leading-[1.8] lg:text-[20px] lg:leading-[1.2]  placeholder:opacity-[0.2] placeholder:text-[13px] placeholder:leading-[1.8] placeholder:font-extralight lg:placeholder:text-[20px] lg:placeholder:leading-[1.2] ${
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
              className={`w-full py-[2px] px-2 bg-input h-6 lg:h-[28px] lg:w-[293px] font-extralight text-[13px] leading-[1.8] lg:text-[20px] lg:leading-[1.2]  placeholder:opacity-[0.2] placeholder:text-[13px] placeholder:leading-[1.8] placeholder:font-extralight lg:placeholder:text-[20px] lg:placeholder:leading-[1.2] ${
                errors.email ? ' text-error' : 'text-white '
              }`}
              placeholder="johnsmith@email.com"
            />
            {errors.email && (
              <div className="flex gap-2 items-center absolute right-0 top-[56px] lg:top-[60px]">
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
        </div>
        <label
          htmlFor="visitor-message"
          className="flex flex-col gap-2 relative text-xs leading-[2] tracking-[2.4px]"
        >
          Message
          <textarea
            id="visitor-message"
            {...register('message')}
            className="w-full  px-2 bg-input h-[196px] md:w-[463px] md:h-[221px] lg:w-full lg:h-[174px]   text-white placeholder:opacity-[0.2] resize-none"
          />
        </label>
      </div>
      <div className="md:flex md:flew-row md:justify-between">
        <button
          type="submit"
          className="text-[30px] font-medium block w-[82px] ml-auto hover:opacity-[0.5] focus:opacity-[0.5] duration-300"
        >
          SEND
        </button>
      </div>
    </form>
  );
}
