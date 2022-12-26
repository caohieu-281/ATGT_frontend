import { connect } from "react-redux";
import {
  addNewPlace as addNewPlaceAction,
  setPlaceFormVisibility,
} from "../../store/actions";
import { IState, Place } from "../../store/models";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Form.css";
import { Field, Formik, Form as FormikForm } from "formik";
import { LatLng } from "leaflet";
import { Select } from "antd";
import { useState } from "react";

const Form = ({
  isVisible,
  position,
  closeForm,
  addNewPlace,
}: {
  isVisible: boolean;
  position: LatLng;
  closeForm: Function;
  addNewPlace: Function;
}) => {
  const [initialValues, setInitialValues] = useState({
    picture: "123",
    title: "",
    description: "",
    seeMoreLink: "",
    linkImage: "",
  });

  const [location, setLocation] = useState("Hoan Kiem");

  const validator = (values: PlaceFormProps) => {
    const keys = Object.keys(values);

    return keys.reduce((prev, curr) => {
      if (!values[curr]) {
        return { ...prev, [curr]: "required" };
      }
      return prev;
    }, {});
  };

  const handleOnSubmit = (values: PlaceFormProps) => {
    addNewPlace({
      ...values,
      position: [position.lat, position.lng],
      district: location,
    });
    // values
    closeForm();
    setInitialValues({
      picture: "123",
      title: "",
      description: "",
      seeMoreLink: "",
      linkImage: "",
    });
  };

  const handleChange = (value: string) => {
    setLocation(value);
  };

  return (
    <div
      className={`form__container form__container--${isVisible && "active"}`}
    >
      <div className="form__header">
        <span
          className="form__header__close"
          role="button"
          onClick={() => closeForm()}
        >
          <AiFillCloseCircle />
        </span>
        <span className="form__header__title">Thêm Địa Điểm</span>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={handleOnSubmit}
      >
        {({ errors, touched, isValidating }) => (
          <FormikForm>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="picture">Địa Điểm</label>
                <Select
                  showSearch
                  className=""
                  style={{ width: "100%" }}
                  placeholder="Search to Select"
                  defaultValue={"Hoan Kiem"}
                  optionFilterProp="children"
                  onChange={handleChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "Hoan Kiem",
                      label: "Hoan Kiem",
                    },
                    {
                      value: "Bach Mai",
                      label: "Bach Mai",
                    },
                    {
                      value: "Hai Ba Trung",
                      label: "Hai Ba Trung",
                    },
                  ]}
                />
              </div>
              {errors.picture && <div className="errors">Required</div>}
            </div>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="title">Tên Địa Điểm Camera</label>
                <Field id="title" name="title" placeholder="Tên camera" />
              </div>
              {errors.title && <div className="errors">Required</div>}
            </div>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="description">Chi Tiết</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="description"
                />
              </div>
              {errors.description && <div className="errors">Required</div>}
            </div>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="link">Link Camera</label>
                <Field id="link" name="seeMoreLink" placeholder="link" />
              </div>
              {errors.seeMoreLink && <div className="errors">Required</div>}
            </div>

            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="link">Link Ảnh</label>
                <Field id="link" name="linkImage" placeholder="link" />
              </div>
              {errors.linkImage && <div className="errors">Required</div>}
            </div>

            <div className="button__container">
              <button className="form__button" type="submit">
                Submit
              </button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return {
    isVisible: places.placeFormIsVisible,
    position: places.prePlacePosition as LatLng,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeForm: () => dispatch(setPlaceFormVisibility(false)),
    addNewPlace: (place: Place) => {
      dispatch(addNewPlaceAction(place));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

interface PlaceFormProps {
  [key: string]: string;
  picture: string;
  title: string;
  description: string;
  seeMoreLink: string;
}
