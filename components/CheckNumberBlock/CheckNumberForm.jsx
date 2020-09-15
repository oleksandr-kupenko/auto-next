import s from "./CheckNumberBlock.module.css";
import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { validateNumber } from "../../utils/validators";
import Router, { useRouter } from "next/router";
import { Arrow } from "./Arrow";
import { withoutSpace } from "../../utils/functions";



const CheckNumberForm = () => {
  const router = useRouter();

  const handleSelect = (e) => {
    e.target.select();
  }

  const handleSubmit = ({ number }) => {
    number = withoutSpace(number);
    if (!router.query.number || withoutSpace(router.query.number) != number) {
      Router.push(`/number/[number]`, `/number/${number}`);
    }
  }

  return <Formik
    onSubmit={handleSubmit}
    initialValues={{ number: '' }}
  >

    {({ errors, touched, resetForm, isValid, values }) => {
      return (
        <Form>
          {!values.number && <Arrow />}
          <div className={s.numberInput}>
            {touched && <ErrorMessage
              component='div'
              name='number'
              className={s.errorBlock}

            />}
            <Field className={`${s.vinInput} ${touched && errors.number ? s.invalid : ''}`}
              name={'number'}
              placeholder="Номер авто"
              validate={validateNumber}
              onClick={handleSelect}
            />

          </div>
          <div className={s.btnBlock}>
            <button className={s.vinBtn} type="submit" >ПРОБИТЬ</button>
            {values.number && <div type="button" data-title="Очистить номер" className={s.cleanBtn} onClick={() => resetForm()}>X</div>}
          </div>
        </Form>
      )
    }
    }
  </Formik>
}

export default CheckNumberForm;