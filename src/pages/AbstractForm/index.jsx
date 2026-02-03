import React, { useState } from "react";
import {
  Button,
  Steps,
  Input,
  Form,
  Select,
  Upload,
  message,
  Result,
  Radio,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { supabase } from "@/libs/createClient";
const { Step } = Steps;
const { Option } = Select;
const { Dragger } = Upload;
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import AbstractTemplate from "@/assets/brochure/Abstarct_Template.docx";

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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    title: "",
    affiliation: "",
    designation: "",
    department: "",
    gender: null,
    nationality: "",
    email: "",
    phone_number: "",
    address: "",
    expertise_field: "",
    qualifications: "",
    experience_years: "",
    preferred_presentation_type: "",
    presentation_mode: null,
    paper_title: "",
    co_authors: "",
    abstract_file: null,
    preferred_session: "",
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
      nationality: "",
      email: "",
      phone_number: "",
      address: "",
      expertise_field: "",
      qualifications: "",
      experience_years: "",
      preferred_presentation_type: "",
      presentation_mode: null,
      paper_title: "",
      co_authors: "",
      abstract_file: null,
      preferred_session: "",
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

  const handleFileChange = ({ fileList: newFileList, field }) => {
    if (field === "abstract_file") {
      setFileList(newFileList);
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
      formData.email === "" ||
      formData.phone_number === "" ||
      formData.address === ""
    ) {
      message.warning("Please fill all the personal details required fields");
      return;
    } else if (
      formData.expertise_field === "" ||
      formData.qualifications === ""
    ) {
      // Professional Details
      message.warning(
        "Please fill all the professional details required fields",
      );
      return;
    } else if (formData.preferred_session === "") {
      // Conference Participation
      message.warning(
        "Please fill all the conference participation required fields",
      );
      return;
    } else if (formData.paper_title === "" || formData.abstract_file === null) {
      // Paper Submission
      message.warning("Please fill all the paper submission required fields");
      return;
    }
    if (
      formData.preferred_presentation_type === "Oral" &&
      !formData.presentation_mode
    ) {
      message.warning("Please select the presentation mode");
      return;
    }

    if (formData.preferred_presentation_type !== "Oral") {
      setFormData((prevData) => ({
        ...prevData,
        presentation_mode: null,
      }));
    }

    setLoading(true);
    // console.log(formData);
    try {
      // Upload files and get their URLs
      const abstractURL = formData.abstract_file
        ? await handleFileUpload(formData.abstract_file, "abstract")
        : null;

      if (abstractURL === null) {
        message.error("Error uploading abstract file");
        setLoading(false);
        return;
      }
      // Add URLs to formData
      const finalData = {
        ...formData,
        abstract_file: abstractURL,
      };

      // console.log(JSON.stringify(finalData));

      // Submit the form data to Supabase
      const { data, error } = await supabase
        .from("abstract_registration")
        .insert(finalData);

      // console.log(data);
      if (error) {
        message.error("Error submitting form");
        console.log(error);
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
            <Form.Item label="Title" name="title">
              <Input
                name="title"
                size="large"
                placeholder="Dr./Prof./Mr./Ms. etc"
                onChange={handleInputChange}
              />
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
                placeholder="Enter Your Designation"
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
      title: "Professional Details & Conference Participation",
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
                  message: "Please input your qualifications!",
                },
              ]}
            >
              <Input
                name="qualifications"
                size="large"
                placeholder="Enter Your Qualification"
                onChange={handleInputChange}
              />
            </Form.Item>

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
            <div className="block" />
            <Form.Item
              label="Preferred type of presentation"
              name="preferred_presentation_type"
              rules={[
                {
                  required: true,
                  message: "Please select your preferred type of presentation!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Your Preferred type"
                onChange={(value) =>
                  handleSelectChange("preferred_presentation_type", value)
                }
                value={formData.preferred_presentation_type}
              >
                <Option value="Oral">Oral</Option>
                <Option value="Poster">Poster (Only for Science)</Option>
              </Select>
            </Form.Item>

            {formData.preferred_presentation_type === "Oral" && (
              <Form.Item
                label="Presentation Mode (Online/Offline)"
                name="presentation_mode"
                rules={[
                  {
                    required: true,
                    message: "Please select your presentation mode!",
                  },
                ]}
              >
                <Radio.Group
                  size="large"
                  onChange={(e) =>
                    handleSelectChange("presentation_mode", e.target.value)
                  }
                  value={formData.presentation_mode}
                >
                  <Radio value="online">Online</Radio>
                  <Radio value="offline">Offline</Radio>
                </Radio.Group>
              </Form.Item>
            )}

            <Form.Item
              label="Title of Paper"
              name="paper_title"
              rules={[
                {
                  required: true,
                  message: "Please enter your paper title!",
                },
              ]}
            >
              <Input
                name="paper_title"
                size="large"
                placeholder="Enter Your Paper Title"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Co-Authors (if Applicable)" name="co_authors">
              <Input
                name="co_authors"
                size="large"
                placeholder="Enter Co-Authors"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Prefferd Session (if multiple themes or tracks are available)"
              name="preferred_session"
              rules={[
                {
                  required: true,
                  message: "Please select your preferred session!",
                },
              ]}
            >
              <Select
                size="large"
                placeholder="Select Your Preffered Session"
                onChange={(value) =>
                  handleSelectChange("preferred_session", value)
                }
                value={formData.preferred_session}
              >
                <Option value="Humanities, Social Sciences, and Literature">
                  Humanities, Social Sciences, and Literature
                </Option>
                <Option value="Science">Science</Option>
                <Option value="Commerce and Management">
                  Commerce and Management
                </Option>
              </Select>
            </Form.Item>
            <div className="">
              <Form.Item
                label="Abstract Upload (Maximum 300 word)"
                name="abstract_file"
                rules={[
                  {
                    required: true,
                    message: "Please upload your abstract!",
                  },
                ]}
              >
                <Dragger
                  name="abstract_file"
                  accept=".doc,.docx"
                  multiple={false}
                  maxCount={1}
                  onChange={({ fileList: newFileList }) =>
                    handleFileChange({
                      fileList: newFileList,
                      field: "abstract_file",
                    })
                  }
                  fileList={fileList}
                  showUploadList={true}
                  beforeUpload={(file) => {
                    const isFileTooLarge = file.size > MAX_FILE_SIZE;

                    if (isFileTooLarge) {
                      message.error(
                        "File is too large! Please upload a file smaller than 2MB.",
                      );
                      return Upload.LIST_IGNORE;
                    }

                    return false;
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Supported formats: MS Word (.doc, .docx). Maximum file size:
                    2MB.
                  </p>
                </Dragger>
              </Form.Item>
              {/* Downloadable Template Section */}
              <div className="mt-4">
                <p>
                  Need help creating your abstract? Download the template below:
                </p>
                <a
                  href={AbstractTemplate}
                  download
                  className="text-blue-500 hover:underline"
                >
                  Download Abstract Template (.docx)
                </a>
              </div>
            </div>
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

  // const handleRegisterAgain = () => {
  //   setSubmitted(false);
  //   setCurrent(0);
  //   resetTheForm();
  // }

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleWhatsappJoin = () => {
    window.open("https://chat.whatsapp.com/Gg6UhfvEO201RZuYngcdhe", "_blank");
  };

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-10 bg-white "
    >
      <div className="max-w-[1100px] mx-auto ">
        {!submitted && (
          <>
            <h1 className="text-center text-2xl font-semibold mb-10">
              Abstract Submission
            </h1>

            <Steps
              current={current}
              onChange={setCurrent}
              labelPlacement="vertical"
              className="max-w-[700px] mx-auto"
            >
              {steps.map((step, index) => (
                <Step key={index} title={step.title} />
              ))}
            </Steps>

            <div className="p-2 sm:p-6 mt-6 md:mt-8">
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
                    type="primary"
                    className="min-w-[120px]"
                    onClick={next}
                  >
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    size="large"
                    type="primary"
                    className="min-w-[120px]"
                    loading={loading}
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                )}
                
                <div className="flex items-center w-full justify-center mt-5">
                  <p className="text-sm text-gray-500 mt-4 max-w-md text-center">
                    If you face any issues while submitting the form, please
                    contact the website handler on&nbsp;
                    <a
                      href="https://wa.me/918089465673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      WhatsApp (+91 80894 65673)
                    </a>
                    &nbsp;and share a screenshot of the issue.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* success show */}
        {submitted && (
          <div className="bg-white shadow-lg py-4 sm:py-10 rounded-xl select-none">
            <Result
              status="success"
              title="Abstract Submission Successful"
              subTitle="Your registration has been submitted successfully. We will get back to you soon."
              extra={[
                <div
                  className="flex mx-auto items-center justify-center gap-6 flex-wrap flex-col"
                  key="actions"
                >
                  <Button
                    type="primary"
                    size="large"
                    className="w-full max-w-[180px]"
                    onClick={() => handleNavigate("/")}
                  >
                    Go To Home
                  </Button>
                  <div className="text-center flex flex-col gap-1 items-center justify-center ">
                    <p className="text-gray-500 font-semibold">
                      Join EMERGE2026 WhatsApp group
                    </p>
                    <Button
                      onClick={handleWhatsappJoin}
                      size="large"
                      className="w-full max-w-fit bg-green-500 text-white hover:bg-green-600"
                    >
                      Join WhatsApp Group
                    </Button>
                  </div>
                </div>,
              ]}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
