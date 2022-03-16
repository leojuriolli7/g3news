import { Formik, Field, Form, FormikValues } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { InputValidationMessage } from "../../components/InputValidationMessage";
import { setUser } from "../../store/User.store";
import ProfileImage from "./mock-profile-image.jpg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(t("required")),
    password: Yup.string().required(t("required")),
  });

  const userLoginInformationMockedFromBackEnd = {
    id: 34,
    firstName: "Leonardo",
    lastName: "Juriolli",
    email: "leojuriolli@gmail.com",
    profileImage: ProfileImage,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };

  const handleSubmit = (values: FormikValues, actions: any) => {
    actions.setSubmitting(true);
    setTimeout(() => {
      // Mocked auth response from back-end
      dispatch(setUser(userLoginInformationMockedFromBackEnd));
      navigate("/");
      actions.setSubmitting(false);
    }, 2000);
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
              type="password"
            />
            {touched.password && errors.password && (
              <InputValidationMessage text={errors.password} />
            )}
          </S.FieldContainer>

          <S.Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner animation="border" size="sm" />
            ) : (
              t("submit")
            )}
          </S.Button>
        </Form>
      )}
    </Formik>
  );
};
