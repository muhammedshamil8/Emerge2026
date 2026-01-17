import React, { useState } from "react";
import {
  Button,
  Steps,
  Input,
  Form,
  Select,
  Upload,
  message,
  Divider,
  Checkbox,
  DatePicker,
  Result,
  Alert,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { supabase } from "@/libs/createClient"; // Your Supabase client import
const { Step } = Steps;
const { Option } = Select;
const { Dragger } = Upload;
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
const getFileExtension = (fileName) => {
  const ext = fileName.split(".").pop();
  return `.${ext}`;
};

const RegistrationForm = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const MAX_FILE_SIZE = 2 * 1024 * 1024;
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [fileList3, setFileList3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    title: "",
    affiliation: "",
    designation: "",
    department: "",
    gender: null,
    food_preference: null,
    nationality: "",
    email: "",
    phone_number: "",
    address: "",
    expertise_field: "",
    qualifications: null,
    experience_years: "",
    participation_type: "",
    accommodation_required: false,
    stay_dates: [],
    special_requests: null,
    arrival_info: "",
    registration_category: "",
    payment_mode: "",
    transaction_id: "",
    transaction_receipt: null,
  });

  const resetTheForm = () => {
    setCurrent(0);
    setFileList([]);
    form.resetFields();
    setFormData({
      full_name: "",
      title: "",
      affiliation: "",
      designation: "",
      department: "",
      gender: null,
      food_preference: null,
      nationality: "",
      email: "",
      phone_number: "",
      address: "",
      expertise_field: "",
      qualifications: null,
      experience_years: "",
      participation_type: "",
      accommodation_required: false,
      stay_dates: [],
      special_requests: null,
      arrival_info: "",
      registration_category: "",
      payment_mode: "",
      transaction_id: "",
      transaction_receipt: null,
    });
  };

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      const [startDate, endDate] = dates;

      setFormData((prev) => ({
        ...prev,
        stay_dates: [
          startDate.format("YYYY-MM-DD"),
          endDate.format("YYYY-MM-DD"),
        ],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        stay_dates: [],
      }));
    }
  };

  const handleFileChange = ({ fileList: newFileList, field }) => {
    if (field === "abstract_file") {
      setFileList(newFileList);
    } else if (field === "transaction_receipt") {
      setFileList2(newFileList);
    } else if (field === "special_requests") {
      setFileList3(newFileList);
    }
    // console.log(newFileList);

    setFormData((prevData) => ({
      ...prevData,
      [field]: newFileList[0],
    }));
  };

  const handleFileUpload = async (file, field) => {
    const uniqueFileName = `${uuidv4()}${getFileExtension(file.name)}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("emerge2026")
      .upload(`${field}/${uniqueFileName}`, file.originFileObj, {
        cacheControl: "3600",
        upsert: true,
      });

    // console.log(uploadData);
    if (uploadError) {
      message.error(`Failed to upload ${field}: ${uploadError.message}`);
      return null;
    }

    const { data: url } = supabase.storage
      .from("emerge2026")
      .getPublicUrl(`${field}/${uniqueFileName}`);

    // console.log(url);
    return url.publicUrl;
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();
    if (!values) {
      return;
    }
    // Personal Details
    if (
      formData.full_name === "" ||
      formData.affiliation === "" ||
      formData.designation === "" ||
      formData.department === "" ||
      formData.nationality === "" ||
      formData.food_preference === null ||
      formData.email === "" ||
      formData.phone_number === "" ||
      formData.address === ""
    ) {
      message.warning("Please fill all the personal details required fields");
      return;
    } else if (
      formData.expertise_field === "" ||
      formData.qualifications === null
    ) {
      // Professional Details
      message.warning(
        "Please fill all the professional details required fields"
      );
    } else if (formData.participation_type === "") {
      // Conference Participation
      message.warning(
        "Please fill all the conference participation required fields"
      );
    } else if (
      formData.accommodation_required &&
      formData.stay_dates.length !== 2
    ) {
      // Accommodation & Travel
      message.warning(
        "Please fill all the accommodation & travel required fields"
      );
    } else if (
      formData.registration_category === "" ||
      formData.payment_mode === "" ||
      formData.transaction_id === "" ||
      formData.transaction_receipt === null
    ) {
      // Payment Information
      message.warning(
        "Please fill all the payment information required fields"
      );
    }

    setLoading(true);
    // console.log(formData);
    try {
      // Upload files and get their URLs
      const receiptURL = formData.transaction_receipt
        ? await handleFileUpload(
            formData.transaction_receipt,
            "transaction_receipt"
          )
        : null;
      const specialRequestURL = formData.special_requests
        ? await handleFileUpload(formData.special_requests, "special_requests")
        : null;

      if (receiptURL === null) {
        message.error("Error uploading transaction receipt please try again");
        return;
      }
      // Add URLs to formData
      const finalData = {
        ...formData,
        transaction_receipt: receiptURL,
        special_requests: specialRequestURL,
      };

      // console.log(JSON.stringify(finalData));

      // Submit the form data to Supabase
      const { data, error } = await supabase
        .from("registeration")
        .insert(finalData);

      // console.log(data);
      if (error) {
        message.error("Error submitting form");
        // console.log(error);
        return;
      }

      message.success("Registration submitted successfully!");
      setSubmitted(true);
      resetTheForm();
    } catch (error) {
      message.error("An error occurred during submission.");
      console.error(error);
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  // Steps data
  const steps = [
    {
      title: "Personal Details",
      content: (
        <Form form={form} name="registeration" layout="vertical">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <Form.Item
              label="Full Name (as per ID)"
              name="full_name"
              className="col-span-2"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input
                name="full_name"
                size="large"
                placeholder="Enter Your Full Name"
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please select your title!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Your Title"
                onChange={(value) => handleSelectChange("title", value)}
                value={formData.title}
              >
                <Option value="Mr.">Mr.</Option>
                <Option value="Ms.">Ms.</Option>
                <Option value="Dr.">Dr.</Option>
                <Option value="Prof.">Prof.</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4">
            <Form.Item
              label="Affiliation"
              name="affiliation"
              rules={[
                {
                  required: true,
                  message: "Please input your affiliation!",
                },
              ]}
            >
              <Input
                name="affiliation"
                size="large"
                placeholder="Enter Your Institution/Organization"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Designation / Position"
              name="designation"
              rules={[
                {
                  required: true,
                  message: "Please input your designation!",
                },
              ]}
            >
              <Input
                name="designation"
                size="large"
                placeholder="Stud / Faculty / Research Scholar / Industry Professional"
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item
              label="Department"
              name="department"
              rules={[
                {
                  required: true,
                  message: "Please input your department!",
                },
              ]}
            >
              <Input
                name="department"
                size="large"
                placeholder="Enter Your Department"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Gender (optional)" name="gender">
              <Select
                size="large"
                placeholder="Select Your Gender"
                onChange={(value) => handleSelectChange("gender", value)}
                value={formData.gender}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Nationality"
              name="nationality"
              rules={[
                {
                  required: true,
                  message: "Please input your Nationality!",
                },
              ]}
            >
              <Input
                name="nationality"
                size="large"
                placeholder="Enter Your Nationality"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Food Preference"
              name="food_preference"
              rules={[
                {
                  required: true,
                  message: "Please select your food preference!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Your Food Preference"
                onChange={(value) =>
                  handleSelectChange("food_preference", value)
                }
                value={formData.food_preference}
              >
                <Option value="Vegetarian">Vegetarian</Option>
                <Option value="Non-Vegetarian">Non-Vegetarian</Option>
                {/* <Option value="Vegan">Vegan</Option> */}
              </Select>
            </Form.Item>
            <div />
          </div>

          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input
                name="email"
                size="large"
                placeholder="Enter Your Email"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                name="phone_number"
                size="large"
                placeholder="Enter Your Mobile Number"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input
              name="address"
              size="large"
              placeholder="Enter Your Address"
              onChange={handleInputChange}
            />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Professional Details & Participation",
      content: (
        <Form form={form} name="registeration" layout="vertical">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <Form.Item
              label="Field of Expertise/ Area of Research"
              name="expertise_field"
              rules={[
                {
                  required: true,
                  message: "Please input your field of expertise!",
                },
              ]}
            >
              <Input
                name="expertise_field"
                size="large"
                placeholder="Enter Field of Expertise"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Qualification"
              name="qualifications"
              rules={[
                {
                  required: true,
                  message: "Please select your qualifications!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Your Qualification"
                onChange={(value) =>
                  handleSelectChange("qualifications", value)
                }
                value={formData.qualifications}
              >
                <Option value="doing_ug">Doing UG</Option>
                <Option value="UG">UG</Option>
                <Option value="PG">PG</Option>
                <Option value="M_phil">M Phil</Option>
                <Option value="PhD">PhD</Option>
                <Option value="Post_Doc">PDF (Post Doctoral Fellowship)</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <Form.Item
              label="Experience in Years (Optional)"
              name="experience_years"
            >
              <Input
                name="experience_years"
                size="large"
                placeholder="Enter Your Experience in Years"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Types of Participation"
              name="participation_type"
              rules={[
                {
                  required: true,
                  message: "Please select your type of participation!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Types of Participation"
                onChange={(value) =>
                  handleSelectChange("participation_type", value)
                }
                value={formData.participation_type}
              >
                <Option value="Attendee">Attendee</Option>
                <Option value="Presenter">Presenter</Option>
                {/* <Option value="Workshop Participant">
                  Workshop Participant
                </Option> */}
              </Select>
            </Form.Item>
          </div>
        </Form>
      ),
    },
    {
      title: "Accommodation & Travel",
      content: (
        <Form form={form} name="registeration" layout="vertical">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <Form.Item
              label="Accommodation Required?"
              name="accommodation_required"
            >
              <div className="flex px-4 gap-4 font-medium">
                <Checkbox
                  onChange={handleCheckboxChange}
                  size="large"
                  name="accommodation_required"
                  checked={formData.accommodation_required}
                />{" "}
                Yes
              </div>
            </Form.Item>
            {formData.accommodation_required && (
              <Form.Item label="Dates of Stay" size="large" name="stay_dates">
                <DatePicker.RangePicker
                  size="large"
                  className="w-full"
                  value={
                    formData.stay_dates.length > 0
                      ? [
                          moment(formData.stay_dates[0]),
                          moment(formData.stay_dates[1]),
                        ]
                      : []
                  }
                  onChange={handleDateChange}
                  format="YYYY-MM-DD"
                  placeholder={["Start Date", "End Date"]}
                  allowClear={true}
                />
              </Form.Item>
            )}
          </div>

          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
              <Form.Item
                label="Special Requests (Optional)"
                name="special_requests"
              >
                <Dragger
                  name="special_requests"
                  accept="image/*,.pdf,.doc,.docx" // Allow images, PDFs, and Word files
                  multiple={false}
                  maxCount={1}
                  onChange={({ fileList: newFileList }) =>
                    handleFileChange({
                      fileList: newFileList,
                      field: "special_requests",
                    })
                  }
                  beforeUpload={(file) => {
                    const isValidFileType =
                      file.type.startsWith("image/") || // Images (JPEG, PNG, etc.)
                      file.type === "application/pdf" || // PDF
                      file.type === "application/msword" || // Word (.doc)
                      file.type ===
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"; // Word (.docx)

                    const isFileTooLarge = file.size > MAX_FILE_SIZE;

                    if (!isValidFileType) {
                      message.error(
                        "Only images, PDF, or Word files are allowed!"
                      );
                      return Upload.LIST_IGNORE;
                    }

                    if (isFileTooLarge) {
                      message.error(
                        "File is too large! Please upload a file smaller than 2MB."
                      );
                      return Upload.LIST_IGNORE;
                    }

                    return false;
                  }}
                  fileList={fileList3}
                  showUploadList={true}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Supported formats: Images (JPEG, PNG, GIF), PDF, Word (.doc,
                    .docx). Maximum file size: 2MB.
                  </p>
                </Dragger>
              </Form.Item>
              {formData.accommodation_required && (
                <Form.Item
                  label="Arrival/Departure Information (optional)"
                  name="arrival_info"
                >
                  <Input
                    name="arrival_info"
                    size="large"
                    placeholder="Enter Your Arrival or Departure Details"
                    onChange={handleInputChange}
                  />
                </Form.Item>
              )}
            </div>
          </>
        </Form>
      ),
    },
    {
      title: "Payment Information",
      content: (
        <Form form={form} name="registeration" layout="vertical">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <Form.Item
              label="Registration Category"
              name="registration_category"
              rules={[
                {
                  required: true,
                  message: "Please select your registration category!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Enter Yuor Fee Category"
                onChange={(value) =>
                  handleSelectChange("registration_category", value)
                }
                value={formData.registration_category}
              >
                <Option value="Student">Student</Option>
                <Option value="Research Scholar">Research Scholar</Option>
                <Option value="Facultie">Facultie</Option>
                <Option value="Delegates from Industry">
                  Delegates from Industry
                </Option>
                <Option value="International Participant">
                  International Participant
                </Option>
                <Option value="Accompanying Persons">
                  Accompanying Person
                </Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Payment Mode"
              name="payment_mode"
              rules={[
                {
                  required: true,
                  message: "Please select your payment mode!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Mode of Payment"
                onChange={(value) => handleSelectChange("payment_mode", value)}
                value={formData.payment_mode}
              >
                <Option value="Credit Card">Credit Card</Option>
                <Option value="Bank Transfer">Bank Transfer</Option>
                <Option value="Upi Payment">Upi Payment</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <Form.Item
              label="Transaction ID"
              name="transaction_id"
              rules={[
                {
                  required: true,
                  message: "Please input your transaction ID!",
                },
              ]}
            >
              <Input
                name="transaction_id"
                size="large"
                placeholder="Enter Transaction ID"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            {/* <Form.Item label="">
            <Upload beforeUpload={(file) => { setFormData({ ...formData, transaction_receipt: file }); return false; }} fileList={fileList} onChange={handleFileChange}>
              <Button icon={<UploadOutlined />}>Upload Receipt</Button>
            </Upload>
          </Form.Item> */}
            <div className="bg-secondary p-3 shadow-full-side rounded-xl max-w-fit sm:text-lg font-medium my-2  mx-auto sm:mx-0">
              <p className="flex items-center justify-center gap-6">
                <span className="text-primary capitalize min-w-[150px] flex items-center justify-between">
                  Account Name <span>:</span>
                </span>
                <span className="flex w-full items-start">
                  Principal EMEA college
                </span>
              </p>
              <p className="flex items-center justify-center gap-6">
                <span className="text-primary capitalize min-w-[150px] flex items-center justify-between">
                  Account No <span>:</span>
                </span>
                <span className="flex w-full items-start">
                  67298282736
                  <br />
                  {"(SBI, Kondotty Branch)"}
                </span>
              </p>
              <p className="flex items-center justify-center gap-6">
                <span className="text-primary capitalize min-w-[150px] flex items-center justify-between">
                  Branch Code<span>:</span>
                </span>
                <span className="flex w-full items-start">T33</span>
              </p>
              <p className="flex items-center justify-center gap-6">
                <span className="text-primary capitalize min-w-[150px] flex items-center justify-between">
                  IFSC Code<span>:</span>
                </span>
                <span className="flex w-full items-start">SBIN0070311</span>
              </p>
              <p className="flex items-center justify-center gap-6">
                <span className="text-primary capitalize min-w-[150px] flex items-center justify-between">
                  Swift Code<span>:</span>
                </span>
                <span className="flex w-full items-start">SBININBBT33</span>
              </p>
            </div>

            <Form.Item
              label="Transaction Receipt"
              name="transaction_receipt"
              rules={[
                {
                  required: true,
                  message: "Please upload the transaction receipt!",
                },
              ]}
            >
              <Dragger
                name="transaction_receipt"
                accept="image/*,.pdf"
                multiple={false}
                maxCount={1}
                onChange={({ fileList: newFileList }) =>
                  handleFileChange({
                    fileList: newFileList,
                    field: "transaction_receipt",
                  })
                }
                beforeUpload={(file) => {
                  const isFileTooLarge = file.size > MAX_FILE_SIZE;
                  // console.log(file.type);  // Check the MIME type
                  // console.log(file.name);  // Check the file name
                  // console.log(file.size);
                  // Validate file type based on MIME type and extension
                  const isValidImage =
                    file.type.startsWith("image/") ||
                    /\.(jpg|jpeg|png|gif)$/i.test(file.name);
                  const isValidPdf = file.type === "application/pdf";

                  if (!(isValidImage || isValidPdf)) {
                    message.error(
                      "Only images (JPEG, PNG, GIF) or PDFs are allowed!"
                    );
                    return Upload.LIST_IGNORE;
                  }

                  if (isFileTooLarge) {
                    message.error(
                      "File is too large! Please upload a file smaller than 2MB."
                    );
                    return Upload.LIST_IGNORE;
                  }

                  return false;
                }}
                fileList={fileList2}
                showUploadList={true}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Supported formats: Images (JPEG, PNG, GIF) or PDF. Maximum
                  file size: 2MB.
                </p>
              </Dragger>
            </Form.Item>
          </div>
        </Form>
      ),
    },
  ];

  const next = async () => {
    const currentStep = steps[current].content;
    // Trigger validation for the current step's form fields
    try {
      const values = await form.validateFields(); // This validates all fields in the current form

      if (values) {
        // If validation is successful, proceed to the next step
        setCurrent(current + 1);
      }
    } catch (error) {
      // console.log('Validation failed:', error);
      message.warning("Please fill in the required fields.");
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleRegisterAgain = () => {
    setSubmitted(false);
    setCurrent(0);
    resetTheForm();
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-10   bg-white"
    >
      <Alert
        className="max-w-[1100px] mx-auto mb-6"
        message="Informational Notes"
        type="info"
        showIcon
        closable
        description={
          <>
            <p className="mb-2">
              If you are submitting a paper, You can submit your abstract by
              clicking the button below.
            </p>{" "}
            <button
              onClick={() => handleNavigate("/register/abstract")}
              className="text-blue-500 underline"
            >
              Abstract Submission
            </button>
          </>
        }
      />

      <div className="max-w-[1100px] mx-auto mb-6">
        {!submitted && (
          <>
            <h1 className="text-center text-2xl font-semibold mb-10 mt-2">
              Registration
            </h1>

            <Steps
              current={current}
              onChange={setCurrent}
              labelPlacement="vertical"
            >
              {steps.map((step, index) => (
                <Step key={index} title={step.title} />
              ))}
            </Steps>

            <div className="p-2 sm:p-6 mt-6 md:mt-10">
              {steps[current].content}

              <div style={{ marginTop: 24 }}>
                {current > 0 && (
                  <Button
                    size="large"
                    className="min-w-[120px]"
                    style={{ margin: "0 8px" }}
                    onClick={prev}
                  >
                    Previous
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button
                    size="large"
                    className="min-w-[120px]"
                    type="primary"
                    onClick={next}
                  >
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    size="large"
                    className="min-w-[120px]"
                    type="primary"
                    loading={loading}
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
        {/* success show */}
        <div
          style={{
            transition: "opacity 0.5s ease",
            opacity: submitted ? 1 : 0,
          }}
          className="bg-white shadow-lg py-4 sm:py-10 rounded-xl select-none"
        >
          {submitted && (
            <Result
              status="success"
              title="Successfully Registered!"
              subTitle="Thank you for registering. Your registration has been submitted successfully."
              extra={[
                <div
                  className="flex mx-auto items-center justify-center gap-6 flex-wrap"
                  key={1}
                >
                  <Button
                    type="primary"
                    key="console"
                    size="large"
                    className="w-full max-w-[180px]"
                    onClick={() => handleNavigate("/")}
                  >
                    Go To Home
                  </Button>
                  <Button
                    onClick={handleRegisterAgain}
                    size="large"
                    className="w-full max-w-[180px]"
                  >
                    Register Again
                  </Button>
                </div>,
              ]}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
