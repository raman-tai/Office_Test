import React, { useState } from "react";
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
    Row,
    Col,
    message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const CreateDriveForm = () => {
    const [form] = Form.useForm();
    const [interviewRounds, setInterviewRounds] = useState([{ id: 1 }]);
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({});

    const handleAddRound = () => {
        setInterviewRounds([
            ...interviewRounds,
            { id: interviewRounds.length + 1 },
        ]);
    };

    const onFinish = (values) => {

        console.log("Form values:", values);
        setFormData(values);
        message.success("Form submitted successfully!");
    };


    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <h3>Job Details</h3>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item name="jobId" label="Job Id">
                        <Input onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="companyName" label="Company Name">
                        <Input onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="jobTitle" label="Job Title">
                        <Input placeholder="Job Title"
                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item name="jobRole" label="Job Role">
                        <Input placeholder="Job Role"
                            onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="jobLocation" label="Job Location">
                        <Select mode="multiple" placeholder="Select Job Locations">
                            <Option value="Bangalore">Bangalore</Option>
                            <Option value="Pune">Pune</Option>
                            <Option value="Chennai">Chennai</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="package" label="Package (CTC)">
                        <InputNumber
                            min={1.2}
                            placeholder="Package (CTC) in LPA"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item name="skills" label="Skills">
                        <Select mode="tags" placeholder="Enter skills">
                            <Option value="CSS">CSS</Option>
                            <Option value="Javascript">Javascript</Option>
                            <Option value="Java">Java</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        name="genderPreference"
                        label="Gender Preference"
                    >
                        <Select mode="multiple" placeholder="Select Gender Preference">
                            <Option value="any">Any</Option>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="qualification" label="Qualification">
                        <Input placeholder="Qualification"
                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item name="streams" label="Streams/Branches">
                        <Input placeholder="Any Stream"
                            onChange={(e) => setFormData({ ...formData, streams: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="passingYear" label="Year Of Passing">
                        <Select mode="multiple" placeholder="Select Passing Years">
                            <Option value="2022">2022</Option>
                            <Option value="2023">2023</Option>
                            <Option value="2024">2024</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="blockingAllowed" label="Blocking Allowed">
                        <Select placeholder="Select">
                            <Option value="no">No</Option>
                            <Option value="yes">Yes</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item name="sslcPercentage" label="SSLC Min percentage">
                        <InputNumber
                            placeholder="30"
                            min={1}
                            max={100}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="pucPercentage" label="PUC Min percentage">
                        <InputNumber
                            placeholder="30"
                            min={1}
                            max={100}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="graduatePercentage" label="Graduate Min percentage">
                        <InputNumber
                            placeholder="30"
                            min={1}
                            max={100}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item name="gapInEducation" label="Gap In Education">
                        <Select placeholder="Allowed or Not">
                            <Option value="allowed">Allowed</Option>
                            <Option value="notAllowed">Not Allowed</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="noOfPosition" label="No of Positions">
                        <InputNumber
                            placeholder="30"
                            min={1}
                            max={100}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <h3>Interview Details</h3>
            {interviewRounds.map((round, index) => (
                <div key={round.id}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name={`roundName${index}`}
                                label="Interview Round Name"
                            >
                                <Input placeholder="Round Name" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name={`roundStartDate${index}`}
                                label="Interview Round Start Date"
                            >
                                <DatePicker
                                    format="MM/DD/YYYY"
                                    placeholder="Select date"
                                    style={{ width: "100%" }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name={`roundEndDate${index}`}
                                label="Interview Round End Date"
                            >
                                <DatePicker
                                    format="MM/DD/YYYY"
                                    placeholder="Select date"
                                    style={{ width: "100%" }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item name={`status${index}`} label="Interview Status">
                                <Select placeholder="Interview Status">
                                    <Option value="yetToStart">Yet to Start</Option>
                                    <Option value="progress">Progress</Option>
                                    <Option value="completed">Completed</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <hr />
                </div>
            ))}

            <Button type="dashed" onClick={handleAddRound} icon={<PlusOutlined />}>
                Add Interview Round
            </Button>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateDriveForm;
