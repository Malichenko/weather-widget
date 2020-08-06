// Core
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  minTemp: Yup.number().integer("Дробное число недопустимо!"),
  maxTemp: Yup.number().integer("Дробное число недопустимо!"),
});
