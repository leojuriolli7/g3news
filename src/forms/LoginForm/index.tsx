import { Formik, Field, Form, FormikValues } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { InputValidationMessage } from "../../components/InputValidationMessage";
import { setUser } from "../../store/User.store";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { apiJson } from "../../services/api";
import { Button } from "../../components/Button";
import { useState } from "react";
import { PasswordEye } from "../../components/PasswordEye";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(t("required")),
    password: Yup.string().required(t("required")),
  });

  const handleSubmit = (values: FormikValues, actions: any) => {
    actions.setSubmitting(true);
    apiJson
      .post("/login", values)
      .then((response) => dispatch(setUser(response.data)));

    navigate("/");
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
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

          <Button
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
};
