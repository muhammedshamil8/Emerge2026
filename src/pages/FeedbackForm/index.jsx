import React, { useState } from 'react';
import { Button, Input, Form, Rate, message, Select, Radio, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/libs/createClient';

const { Option } = Select;

function FeedbackForm() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const desc = ['Poor', 'bad', 'normal', 'good', 'Excellent'];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        affiliation: '',
        role: '',
        registration: 0,
        communication: 0,
        helpfulness: 0,
        venue_comfort: 0,
        audio_visual: 0,
        food_quality: 0,
        accommodation: 0,
        theme_relevance: 0,
        keynote_quality: 0,
        topics_variety: 0,
        peer_connection: 0,
        speaker_interaction: 0,
        most_engaging_session: '',
        improvements: '',
        suggestions: '',
        recommendation: 0,
        comments: ''
    });

    const resetTheForm = () => {
        setFormData({
            name: '',
            email: '',
            affiliation: '',
            role: '',
            registration: 0,
            communication: 0,
            helpfulness: 0,
            venue_comfort: 0,
            audio_visual: 0,
            food_quality: 0,
            accommodation: 0,
            theme_relevance: 0,
            keynote_quality: 0,
            topics_variety: 0,
            peer_connection: 0,
            speaker_interaction: 0,
            most_engaging_session: '',
            improvements: '',
            suggestions: '',
            recommendation: 0,
            comments: ''
        });
    };



    const handleSubmit = async (values) => {
        setLoading(true);
        if (values.name === '' || values.email === '' || values.affiliation === '' || values.role === '') {
            message.warning('Please fill all the personal details required fields');
            setLoading(false);
            return;
        }
        if (!values && values.comments === '') {
            message.error('Please fill in the all fields.');
            setLoading(false);
            return;
        }
        try {
            // Mock submission of data, replace with API call
            // console.log('Feedback submitted:', values);

            const { data, error } = await supabase.from('feedback').insert([values]);
            if (error) {
                message.error('An error occurred while submitting the feedback.');
                // throw error;
                setLoading(false);
                return;
            }
            setSubmitted(true);
            resetTheForm();
            message.success('Feedback submitted successfully!');
        } catch (error) {
            message.error('An error occurred while submitting the feedback.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleRateChange = (value, name) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-10 bg-lightblue  rounded-lg w-full mx-auto max-w-[1100px]"
        >
            {!submitted && (
                <>
                    <h1 className="text-center text-2xl font-semibold mb-10">We appreciate your feedback.</h1>

                    <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <section className="w-full mx-auto ">
                            {/* General Information */}
                            <div>
                                <h2 className="text-xl font-medium">1. General Information</h2>
                                <div className='p-4'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[{ required: true, message: 'Please enter your name!' }]}
                                        >
                                            <Input size="large" placeholder="Your Name" onChange={handleInputChange} />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            label="Email Address"
                                            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}

                                        >
                                            <Input size="large" placeholder="Your Email Address" onChange={handleInputChange} />
                                        </Form.Item>
                                    </div>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
                                        <Form.Item
                                            name="affiliation"
                                            label="Affiliation/Organization"
                                            rules={[{ required: true, message: 'Please enter your affiliation!' }]}
                                        >
                                            <Input size="large" placeholder="Your Affiliation or Organization" onChange={handleInputChange} />
                                        </Form.Item>
                                        <Form.Item
                                            name="role"
                                            label="Role at the Conference"
                                            rules={[{ required: true, message: 'Please select your role!' }]}
                                        >
                                            <Select size="large" placeholder="Select your role" onChange={(value) => handleSelectChange('role', value)} value={formData.role}>
                                                <Option value="speaker">Speaker</Option>
                                                <Option value="presenter">Presenter</Option>
                                                <Option value="participant">Participant</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>



                            <div>
                                {/* Pre-Conference Arrangements */}
                                <h2 className="text-xl font-medium mt-2">2. Pre-Conference Arrangements</h2>
                                <div className='p-4'>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
                                        <Form.Item name="registration" label="Ease of Registration"
                                            rules={[{ required: true, message: 'Please rate the ease of registration!' }]}
                                        >
                                            <Rate tooltips={desc} name="registration" value={formData.registration}
                                                onChange={(value) => handleRateChange(value, 'registration')} />
                                        </Form.Item>
                                        <Form.Item name="communication" label="Communication and Updates"
                                            rules={[{ required: true, message: 'Please rate the communication and updates!' }]}
                                        >
                                            <Rate tooltips={desc} name="communication" value={formData.communication}
                                                onChange={(value) => handleRateChange(value, 'communication')} />
                                        </Form.Item>
                                    </div>
                                    <Form.Item name="helpfulness" label="Helpfulness of Organizers"
                                        rules={[{ required: true, message: 'Please rate the helpfulness of organizers!' }]}
                                    >
                                        <Rate tooltips={desc} name="helpfulness" value={formData.helpfulness}
                                            onChange={(value) => handleRateChange(value, 'helpfulness')} />
                                    </Form.Item>
                                </div>
                            </div>
                            <div >
                                {/* Venue and Facilities */}
                                <h2 className="text-xl font-medium mt-2">3. Venue and Facilities</h2>
                                <div className='p-4'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
                                        <Form.Item name="venue_comfort" label="Venue Comfort and Accessibility"
                                            rules={[{ required: true, message: 'Please rate the venue comfort and accessibility!' }]}
                                        >
                                            <Rate tooltips={desc} name="venue_comfort" value={formData.venue_comfort}
                                                onChange={(value) => handleRateChange(value, 'venue_comfort')} />
                                        </Form.Item>
                                        <Form.Item name="audio_visual" label="Audio-Visual and Technical Support"
                                            rules={[{ required: true, message: 'Please rate the audio-visual and technical support!' }]}
                                        >
                                            <Rate tooltips={desc} name="audio_visual" value={formData.audio_visual}
                                                onChange={(value) => handleRateChange(value, 'audio_visual')} />
                                        </Form.Item>
                                    </div>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
                                        <Form.Item name="food_quality" label="Quality of Food"
                                            rules={[{ required: true, message: 'Please rate the quality of food!' }]}
                                        >
                                            <Rate tooltips={desc} name="food_quality" value={formData.food_quality}
                                                onChange={(value) => handleRateChange(value, 'food_quality')} />
                                        </Form.Item>
                                        <Form.Item name="accommodation" label="Accommodation Arrangements"
                                            rules={[{ required: true, message: 'Please rate the accommodation arrangements!' }]}
                                        >
                                            <Rate tooltips={desc} name="accommodation" value={formData.accommodation}
                                                onChange={(value) => handleRateChange(value, 'accommodation')} />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
                                {/* Conference Content */}
                                <div>
                                    <h2 className="text-xl font-medium mt-2">4. Conference Content</h2>
                                    <div className='p-4'>

                                        <Form.Item name="theme_relevance" label="Relevance of the Theme"
                                            rules={[{ required: true, message: 'Please rate the relevance of the theme!' }]}
                                        >
                                            <Rate tooltips={desc} name="theme_relevance" value={formData.theme_relevance}
                                                onChange={(value) => handleRateChange(value, 'theme_relevance')} />
                                        </Form.Item>
                                        <Form.Item name="keynote_quality" label="Quality of Keynote Speeches"
                                            rules={[{ required: true, message: 'Please rate the quality of keynote speeches!' }]}
                                        >
                                            <Rate tooltips={desc} name="keynote_quality" value={formData.keynote_quality}
                                                onChange={(value) => handleRateChange(value, 'keynote_quality')} />
                                        </Form.Item>
                                        <Form.Item name="topics_variety" label="Variety of Topics Covered"
                                            rules={[{ required: true, message: 'Please rate the variety of topics covered!' }]}
                                        >
                                            <Rate tooltips={desc} name="topics_variety" value={formData.topics_variety}
                                                onChange={(value) => handleRateChange(value, 'topics_variety')} />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div>

                                    {/* Networking Opportunities */}
                                    <h2 className="text-xl font-medium mt-2">5. Networking Opportunities</h2>
                                    <div className='p-4'>
                                        <Form.Item name="peer_connection" label="Opportunities to Connect with Peers"
                                            rules={[{ required: true, message: 'Please rate the opportunities to connect with peers!' }]}
                                        >
                                            <Rate tooltips={desc} name="peer_connection" value={formData.peer_connection}
                                                onChange={(value) => handleRateChange(value, 'peer_connection')} />
                                        </Form.Item>
                                        <Form.Item name="speaker_interaction" label="Value of Interactions with Speakers and Experts"
                                            rules={[{ required: true, message: 'Please rate the value of interactions with speakers and experts!' }]}
                                        >
                                            <Rate tooltips={desc} name="speaker_interaction" value={formData.speaker_interaction}
                                                onChange={(value) => handleRateChange(value, 'speaker_interaction')} />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>

                            {/* Specific Sessions */}
                            <div>
                                <h2 className="text-xl font-medium mt-2">6. Specific Sessions</h2>
                                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 p-4'>
                                    <Form.Item name="most_engaging_session" label="Which session did you find most engaging or valuable?"
                                        rules={[{ required: true, message: 'Please enter the most engaging session!' }]}
                                    >
                                        <Input.TextArea rows={4} placeholder="Write your answer here" onChange={handleInputChange} />
                                    </Form.Item>
                                    <Form.Item name="improvements" label="Were there any sessions you felt could have been improved?"
                                        rules={[{ required: true, message: 'Please enter the sessions that could have been improved!' }]}
                                    >
                                        <Input.TextArea rows={4} placeholder="Write your answer here" onChange={handleInputChange} />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4'>
                                <div>
                                    {/* Suggestions for Improvement */}
                                    <h2 className="text-xl font-medium mt-2">7. Suggestions for Improvement</h2>
                                    <div className='p-4'>
                                        <Form.Item name="suggestions" label="What improvements would you suggest for future conferences?"
                                            rules={[{ required: true, message: 'Please enter the suggestions for improvement!' }]}
                                        >
                                            <Input.TextArea rows={4} placeholder="Write your answer here" onChange={handleInputChange} />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div>
                                    {/* Overall Experience */}
                                    <h2 className="text-xl font-medium mt-2">8. Overall Experience</h2>
                                    <div className='p-4'>
                                        <Form.Item name="recommendation" label="How likely are you to recommend EMERGE to others?"
                                            rules={[{ required: true, message: 'Please rate the recommendation!' }]}
                                        >
                                            <Rate tooltips={desc} name="recommendation" value={formData.recommendation}
                                                onChange={(value) => handleRateChange(value, 'recommendation')} />

                                        </Form.Item>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 '>

                                <div>
                                    {/* Additional Comments */}
                                    <h2 className="text-xl font-medium mt-2">9. Additional Comments</h2>
                                    <div className='p-4'>
                                        <Form.Item name="comments" label="Additional Comments (Optional)"
                                            rules={[{ required: false, message: 'Please enter the additional comments!' }]}
                                        >
                                            <Input.TextArea rows={4} placeholder="Write your answer here" onChange={handleInputChange} />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <Button type="primary" htmlType="submit" loading={loading} size="large" className="min-w-[200px]">
                                    Submit Feedback
                                </Button>
                            </div>
                        </section>
                    </Form>
                </>
            )}

            {/* Success Show */}
            {submitted && (
                <div className="mt-10">
                    <Result
                        status="success"
                        title="Feedback Submitted Successfully!"
                        subTitle="Thank you for your valuable feedback. We look forward to welcoming you again at future events."
                        extra={[
                            <div className="flex justify-center gap-4" key="extra">
                                <Button type="primary" size="large" onClick={() => handleNavigate('/')}>
                                    Go to Home
                                </Button>
                            </div>
                        ]}
                    />
                </div>
            )}
        </motion.div>
    );
}

export default FeedbackForm;
