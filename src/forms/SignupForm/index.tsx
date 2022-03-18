import { useState } from "react";
import * as Yup from "yup";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { userSignUp } from "../../utils/requests";
import { setUser } from "../../store/User.store";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
import { Button } from "../../components/Button";
import { InputValidationMessage } from "../../components/InputValidationMessage";
import { PasswordEye } from "../../components/PasswordEye";
import { Field, Form, Formik, FormikValues } from "formik";
import {
  emailRegex,
  firstNameRegex,
  lastNameRegex,
} from "../../helper/constants";

export function SignupForm() {
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .required(t("required"))
      .matches(emailRegex, { message: t("emailInvalid") }),
    password: Yup.string()
      .required(t("required"))
      .min(5, t("passwordMinErrorMessage"))
      .max(30, t("passwordMaxErrorMessage")),
    firstName: Yup.string()
      .required(t("required"))
      .matches(firstNameRegex, { message: t("nameRegexError") }),
    lastName: Yup.string()
      .required(t("required"))
      .matches(lastNameRegex, { message: t("nameRegexError") }),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      t("passwordsDontMatchMessage")
    ),
  });

  const { mutate } = useMutation(userSignUp, {
    onSuccess: (data) => {
      dispatch(setUser(data));
      navigate("/");
    },
    onError: () => {
      toast.error(t("toastErrorMessage"));
    },
  });

  const handleSubmit = (values: FormikValues, actions: any) => {
    actions.setSubmitting(true);
    mutate(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        passwordConfirm: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <S.FieldContainer>
            <S.InputLabel htmlFor="text">{t("firstName")}</S.InputLabel>
            <Field
              id="firstName"
              name="firstName"
              placeholder={t("firstNameInputPlaceholder")}
              type="text"
            />
            {touched.firstName && errors.firstName && (
              <InputValidationMessage text={errors.firstName} />
            )}
          </S.FieldContainer>

          <S.FieldContainer>
            <S.InputLabel htmlFor="text">{t("lastName")}</S.InputLabel>
            <Field
              id="lastName"
              name="lastName"
              placeholder={t("lastNameInputPlaceholder")}
              type="text"
            />
            {touched.lastName && errors.lastName && (
              <InputValidationMessage text={errors.lastName} />
            )}
          </S.FieldContainer>

          <S.FieldContainer>
            <S.InputLabel htmlFor="email">{t("email")}</S.InputLabel>
            <Field
              id="email"
              name="email"
              placeholder={t("emailInputPlaceholderLogin")}
              type="email"
            />
            {touched.email && errors.email && (
              <InputValidationMessage text={errors.email} />
            )}
          </S.FieldContainer>

          <S.FieldContainer>
            <S.InputLabel htmlFor="password">{t("password")}</S.InputLabel>
            <Field
              id="password"
              name="password"
              placeholder={t("passwordInputPlaceholderLogin")}
              type={passwordVisible === true ? "text" : "password"}
            />
            <PasswordEye
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
            {touched.password && errors.password && (
              <InputValidationMessage text={errors.password} />
            )}
          </S.FieldContainer>

          <S.FieldContainer>
            <S.InputLabel htmlFor="password">
              {t("confirmPassword")}
            </S.InputLabel>
            <Field
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder={t("PasswordConfirmInputPlaceholder")}
              type={passwordVisible === true ? "text" : "password"}
            />
            <PasswordEye
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
            {touched.passwordConfirm && errors.passwordConfirm && (
              <InputValidationMessage text={errors.passwordConfirm} />
            )}
          </S.FieldContainer>

          <Button
            color="yellow"
            type="submit"
            disabled={isSubmitting}
            text={
              isSubmitting ? (
                <Spinner animation="border" size="sm" />
              ) : (
                t("submit")
              )
            }
          />
        </Form>
      )}
    </Formik>
  );
}
