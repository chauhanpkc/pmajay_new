$("#commentFormm").bootstrapValidator({
    fields: {
        project_title: {
            validators: {
                notEmpty: {
                    message: 'Please enter title of the Project'
                }
            }
        },
        project_object: {
            validators: {
                notEmpty: {
                    message: 'Please enter Project Object, minimum 50 character required '
                }
            }
        },
        project_target: {
            validators: {
                notEmpty: {
                    message: 'Please enter About Target, minimum 50 character required '
                }
            }
        },
        expected_start_date: {
            validators: {
                notEmpty: {
                    message: 'Please select Expected Start Date '
                }
            }
        },
        expected_end_date: {
            validators: {
                notEmpty: {
                    message: 'Please select Expected End Date '
                }
            }
        },
        skill_type: {
            validators: {
                notEmpty: {
                    message: 'Please select Skill '
                }
            }
        },
        institute_name: {
            validators: {
                notEmpty: {
                    message: 'Please select Institute Name '
                }
            }
        },
        exec_agency_skill: {
            validators: {
                notEmpty: {
                    message: 'Please select Executing Agency '
                }
            }
        },
        cost_per_ben: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Cost '
                }
            }
        },
        no_of_ben: {
            validators: {
                notEmpty: {
                    message: 'Please Enter number of Beneficiary '
                }
            }
        },
        skill_declaration: {
            validators: {
                notEmpty: {
                    message: 'Please Tick '
                }
            }
        },
        total_pro_cost_skill: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Total Proposed Cost '
                }
            }
        },
        details_of_phy_target_skill: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Details of Physical target '
                }
            }
        },
        financial_year_skill: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Financial year wise break-up '
                }
            }
        },
        village: {
            validators: {
                notEmpty: {
                    message: 'Please Select Village '
                }
            }
        },
        multiple_town: {
            validators: {
                notEmpty: {
                    message: 'Please Select Town '
                }
            }
        },
        exec_agency_infra: {
            validators: {
                notEmpty: {
                    message: 'Please select Executing Agency '
                }
            }
        },
        infra_dev: {
            validators: {
                notEmpty: {
                    message: 'Please tick to proceed '
                }
            }
        },
        infra_type: {
            validators: {
                notEmpty: {
                    message: 'Please select Infrastructure Type '
                }
            }
        },
        infra_desc: {
            validators: {
                notEmpty: {
                    message: 'Please select Infrastructure Description '
                }
            }
        },
        total_cost_amount: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Total Cost Amount '
                }
            }
        },
        details: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Details '
                }
            }
        },
        details_amt: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Amount '
                }
            }
        },
        funds_proposed:{
            validators: {
                notEmpty: {
                    message: 'Please Enter Funds proposed under Grant-in-aid Amount'
                }
            }
        },
        approx_sc_benif:{
            validators: {
                notEmpty: {
                    message: 'Please Enter Approximate SC Beneficiaries'
                }
            }
        },
        total_proposed_cost:{
            validators: {
                notEmpty: {
                    message: 'Please Enter Total Proposed Cost'
                }
            }
        },
        details_of_phy_target_infra:{
            validators: {
                notEmpty: {
                    message: 'Please Enter Details of Physical Target'
                }
            }
        },
        financial_year_infra:{
            validators: {
                notEmpty: {
                    message: 'Please Enter Financial Year wise Break-up'
                }
            }
        },
        infra_declaration: {
            validators: {
                notEmpty: {
                    message: 'Please Tick '
                }
            }
        },
        infra_declaration1: {
            validators: {
                notEmpty: {
                    message: 'Please Tick '
                }
            }
        },
        domain_income: {
            validators: {
                notEmpty: {
                    message: 'Please select domain '
                }
            }
        },
        sub_domain_income: {
            validators: {
                notEmpty: {
                    message: 'Please select Sub domain '
                }
            }
        },
        exec_agency_income: {
            validators: {
                notEmpty: {
                    message: 'Please select Executing Agency '
                }
            }
        },
        total_cost_acti_income: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Total cost Activities '
                }
            }
        },
        benieficiaries_income: {
            validators: {
                notEmpty: {
                    message: 'Please enter No. of Benieficiaries Proposed '
                }
            }
        },
        loan_from_bank_income: {
            validators: {
                notEmpty: {
                    message: 'Please enter Amount '
                }
            }
        },
        contribution_income: {
            validators: {
                notEmpty: {
                    message: 'Please enter Amount '
                }
            }
        },
        state_fund_income: {
            validators: {
                notEmpty: {
                    message: 'Please enter Amount '
                }
            }
        },
        others_amt_income: {
            validators: {
                notEmpty: {
                    message: 'Please enter Amount '
                }
            }
        },
        total_proposed_cost_income: {
            validators: {
                notEmpty: {
                    message: 'Please enter Amount '
                }
            }
        },
        details_of_phy_target_income: {
            validators: {
                notEmpty: {
                    message: 'Please Enter Details of Physical Target '
                }
            }
        },
        financial_year_income:{
            validators: {
                notEmpty: {
                    message: 'Please Enter Financial Year wise Break-up'
                }
            }
        },
    }
});
