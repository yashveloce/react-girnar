import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import axios from 'axios';

function Inquiry() {
    const [inquiry, set_inquiry] = useState();
    useEffect(() => {
        axios(
            "http://localhost/girnar_backend/api/read_customer_inquiry.php")
            .then((res) => {
                set_inquiry(res.data);
                console.log(inquiry);
            })
    }, [])
    const [customer, set_customer] = useState();
    const [material_type, set_material_type] = useState();
    const [material_thickness, set_material_thickness] = useState();
    const [no_of_sheets, set_no_of_sheets] = useState();
    const [material_grade, set_material_grade] = useState();
    const [material_status, set_material_status] = useState();
    const [type_of_process, set_type_of_process] = useState();
    const [expected_delivery, set_expected_delivery] = useState();
    const [design_upload, set_design_upload] = useState();
    const [description, set_description] = useState();
    const onCustomerChange = (e) => {
        set_customer(e.target.value);
    }
    const onMaterialTypeChange = (e) => {
        set_material_type(e.target.value);
    }
    const onMaterialThicknessChange = (e) => {
        set_material_thickness(e.target.value);
    }
    const onNoOfSheetsChange = (e) => {
        set_no_of_sheets(e.target.value);
    }
    const onMaterialGradeChange = (e) => {
        set_material_grade(e.target.value);
    }
    const onMaterialStatusChange = (e) => {
        set_material_status(e.target.value);
    }
    const onTypeOfProcessChange = (e) => {
        set_type_of_process(e.target.value);
    }
    const onExpectedDeliveryChange = (e) => {
        set_expected_delivery(e.target.value);
    }
    const onDesignUploadChange = (e) => {
        set_design_upload(e.target.files[0]);
        console.log(design_upload);
    }
    const onDescriptionChange = (e) => {
        set_description(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('customer', customer);
        formData.append('material_type', material_type);
        formData.append('material_thickness', material_thickness);
        formData.append('no_of_sheets', no_of_sheets);
        formData.append('material_grade', material_grade);
        formData.append('material_status', material_status);
        formData.append('type_of_process', type_of_process);
        formData.append('expected_delivery', expected_delivery);
        formData.append('design_upload', design_upload);
        formData.append('description', description);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post('http://localhost/girnar_backend/api/create_customer_inquiry.php', formData, config)
            .then(response => {
                axios(
                    "http://localhost/girnar_backend/api/read_customer_inquiry.php")
                    .then((res) => {
                        set_inquiry(res.data);
                        console.log(inquiry);
                    })
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Header />

            <Menu />
            <div className='content-wrapper'>
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Form</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Form</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12">
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Enquiry</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form onSubmit={onFormSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label >Customer</label>
                                                <input onChange={onCustomerChange} name="customer" className="form-control" placeholder="Enter Customer" />
                                            </div>
                                            <div className="form-group">
                                                <label >Material Type</label>
                                                <input onChange={onMaterialTypeChange} name="material_type" className="form-control" placeholder="Enter Material Type" />
                                            </div>
                                            <div className="form-group">
                                                <label >Material Thickness</label>
                                                <input onChange={onMaterialThicknessChange} name="material_thickness" className="form-control" placeholder="Enter Material Thickness" />
                                            </div>
                                            <div className="form-group">
                                                <label >No Of Sheets</label>
                                                <input onChange={onNoOfSheetsChange} name="no_of_sheets" className="form-control" placeholder="Enter No Of Sheets" />
                                            </div>
                                            <div className="form-group">
                                                <label >Material Grade</label>
                                                <input onChange={onMaterialGradeChange} name="material_grade" className="form-control" placeholder="Enter Material Grade" />
                                            </div>
                                            <div className="form-group">
                                                <label >Material Status</label>
                                                <select onChange={onMaterialStatusChange} name="material_status" className="form-control">
                                                    <option>With</option>
                                                    <option>Without</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label >Type Of Process</label>
                                                <select name="type_of_process" onChange={onTypeOfProcessChange} className="form-control">
                                                    <option>Laser Cutting</option>
                                                    <option>Bending</option>
                                                    <option>Fabrication</option>
                                                    <option>Machining</option>
                                                    <option>Powder Coating</option>
                                                </select>
                                                {/* <DropdownMultiselect
                                                    onChange={onInputChange}
                                                    options={["Laser Cutting", "Bending", "Fabrication", "Machining", "Powder Coating"]}
                                                    name="type_of_process"
                                                /> */}
                                            </div>
                                            <div className="form-group">
                                                <label >Expected Delivery</label>
                                                <input onChange={onExpectedDeliveryChange} name="expected_delivery" className="form-control" placeholder="Enter Expected Delivery" />
                                            </div>
                                            <div className="form-group">
                                                <label >Design Upload</label>
                                                <input type="file" onChange={onDesignUploadChange} name="design_upload" className="form-control" placeholder="Enter Design File" />
                                            </div>
                                            <div className="form-group">
                                                <label >Description</label>
                                                <input onChange={onDescriptionChange} name="description" className="form-control" placeholder="Enter Description" />
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Inquiry Generation</h3>
                                    </div>
                                    <div class="card-body">
                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Customer</th>
                                                    <th>Material Type</th>
                                                    <th>Material Thickness</th>
                                                    <th>No Of Sheets</th>
                                                    <th>Material Grade</th>
                                                    <th>Material Status</th>
                                                    <th>Type Of Process</th>
                                                    <th>Expected Delivery</th>
                                                    <th>Design Upload</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    inquiry===undefined?"":inquiry.data.map((inquiry) => (
                                                        <tr>
                                                            <td>{inquiry.id}</td>
                                                            <td>{inquiry.customer}</td>
                                                            <td>{inquiry.material_type}</td>
                                                            <td>{inquiry.material_thickness}</td>
                                                            <td>{inquiry.no_of_sheets}</td>
                                                            <td>{inquiry.material_grade}</td>
                                                            <td>{inquiry.material_status}</td>
                                                            <td>{inquiry.type_of_process}</td>
                                                            <td>{inquiry.expected_delivery}</td>
                                                            <td><a href="{`http://localhost/girnar_backend/assets/images/${inquiry.design_upload}`}">File</a></td>
                                                            <td>{inquiry.description}</td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Inquiry;
