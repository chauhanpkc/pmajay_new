// bootstrap wizard//

$("#commentFormm").bootstrapValidator({

    fields: {
       project_name: {
                validators: {
                        stringLength: {
                        min: 10,
                         max: 150,
                    },
                        notEmpty: {
                        message: 'Please enter title of the Project'
                    },
					regexp: {
                        regexp: /^[^*|\":<>[\]{}`\\()';!#@&$%^]+$/,
                        message: 'special characters  are not allowed'
                    }
                }
       },
       project_desc: {
                validators: {
                        stringLength: {
                        min: 50,
                         max: 1000,
                    },
                        notEmpty: {
                        message: 'Please enter description'
                    },
					regexp: {
                        regexp: /^[^*|\":<>[\]{}`\\';|!#@&$^]+$/,
                        message: 'special characters  are not allowed'
                    }
                }
       },
       target_achieved: {
                validators: {
                        stringLength: {
                        min: 50,
                         max: 1000,
                    },
                        notEmpty: {
                        message: 'Please enter about the target to be achieved'
                    },
					regexp: {
                        regexp: /^[^*|\":<>[\]{}`\\';!|#@&$^]+$/,
                        message: 'special characters  are not allowed'
                    }
                   
                }
       },
	    exp_sdate: {
                validators: {
                        
                    notEmpty: {
                        message: 'Please select Expected  Start Date '
                    }
                   
                }
       },
	   exp_edate: {
                validators: {
                        
                    notEmpty: {
                        message: 'Please select Expected  Start Date '
                    }
                   
                }
       },
	   exp_dday: {
                validators: {
                        
                    between: {
					    min: 10,
					    max: 1000,
					    message: 'Please enter days  between %s and %s'
					},
                        notEmpty: {
                        message: 'Please enter Expected Duration '
                    }
                   
                }
       },
	   
	   
	   skill_type: {
                validators: {
                       notEmpty: { // <=== Use notEmpty instead of Callback validator
                   message: 'Please select skill'
                }
                }
            },
			institute_name: {
                validators: {
                       notEmpty: { // <=== Use notEmpty instead of Callback validator
                   message: 'Please select Institute'
                }
                }
            },
       cost_beneficiary_s: {
                validators: {
                     between: {
                        min: 100,
                         max: 1000000,
                         message: 'Please enter minimum value 100 and maximum 1000000 '
                    },
                        notEmpty: {
                        message: 'Please enter value'
                    }
                   
                }
       },
       tt_no_sca_beneficiary_s: {
                validators: {
                        
                    between: {
					    min: 2,
					    max: 9999,
					    message: 'Please enter a value between %s and %s'
					},
                        notEmpty: {
                        message: 'Please enter number'
                    }
                   
                }
       },
	   skill_declaration: {
                validators: {
                       notEmpty: { 
                   message: 'Please check skill Declaration'
                }
                }
            },
	   'finyearincomeph[]': {
                validators: {
					 stringLength: {
                        min: 10,
                         max: 150,
                    },
                       notEmpty: { 
                   message: 'Please enter Physical Target'
                },
					regexp: {
                       regexp: /^[^*|\":<>[\]{}`\\()';!#@&$%^]+$/,
                        message: 'special characters  are not allowed'
                    }
                }
            },
			'finyearskillph[]': {
                validators: {
					 stringLength: {
                        min: 10,
                         max: 150,
                    },
                       notEmpty: { 
                   message: 'Please enter Physical Target'
                },
					regexp: {
                       regexp: /^[^*|\":<>[\]{}`\\()';!#@&$%^]+$/,
                        message: 'special characters  are not allowed'
                    }
                }
            },
			'finyearinfraph[]': {
                validators: {
					 stringLength: {
                        min: 10,
                         max: 150,
                    },
                       notEmpty: { 
                   message: 'Please enter Physical Target'
                },
					regexp: {
                       regexp: /^[^*|\":<>[\]{}`\\()';!#@&$%^]+$/,
                        message: 'special characters are not allowed'
                    }
                }
            },
						
			'finyearincomefi[]': {
                validators: {
					 greaterThan: {
					    value: 100,
					    message: 'Please enter a value greater than 100'
					},
                       notEmpty: { 
                   message: 'Please enter value'
                }
                }
            },
			'finyearskillfi[]': {
                validators: {
					 greaterThan: {
					    value: 100,
					    message: 'Please enter a value greater than 100'
					},
                       notEmpty: { 
                   message: 'Please enter value'
                }
                }
            },
			'finyearinfrafi[]': {
                validators: {
					 greaterThan: {
					    value: 100,
					    message: 'Please enter a value greater than 100'
					},
                       notEmpty: { 
                   message: 'Please enter value'
                }
                }
            },
			
	    imp_agency_skill: {
               validators: {
                       notEmpty: { 
                       message: 'Please select Executing Agency'
                }
                }
       },
	   imp_agency_infra: {
               validators: {
                       notEmpty: { 
                       message: 'Please select Executing Agency'
                }
                }
       },
	   imp_agency_income: {
               validators: {
                       notEmpty: { 
                       message: 'Please select Executing Agency'
                }
                }
       },
	   
	   
	   areatype: {
                validators: {
                       notEmpty: { 
                   message: 'Please check Area Type '
                }
                }
            },
			infra_type: {
                validators: {
                       notEmpty: { 
                   message: 'Please select type Infrastrucure '
                }
                }
            },
			infra_desc: {
                validators: {
					 stringLength: {
                        min: 10,
                         max: 150,
                    },
                       notEmpty: { 
                   message: 'Please enter Infrastructure Description'
                },
					regexp: {
                       regexp: /^[^*|\":<>[\]{}`\\()';!#@&$%^]+$/,
                        message: 'special characters  are not allowed'
                    }
                }
            },
			
			'town_id[]': {
                validators: {
                       notEmpty: { 
                   message: 'Please select town'
                }
                }
            },
			'geo_type[]': {
                validators: {
                       notEmpty: { 
                   message: 'Please check Geographical Types'
                }
                }
            },
			
			'village_id[]': {
                validators: {
                       notEmpty: { 
                   message: 'Please select village'
                }
                }
            },
			
			u1: {
                validators: {
                       notEmpty: { 
                   message: 'Please check Declaration A'
                }
                }
            },
			u2: {
                validators: {
                       notEmpty: { 
                   message: 'Please check Declaration B'
                }
                }
            },
			
			
        total_subsidy_amount_i: {
                validators: {
                        
                    between: {
					    min: 1000,
					    max: 500000000,
					    message: 'Please enter a value  between %s and %s'
					},
                        notEmpty: {
                        message: 'Please enter value '
                    }
                   
                }
       },
       tt_no_beneficiary_i: {
                validators: {
                        
                    between: {
					    min: 1,
					    max: 2500000,
					    message: 'Please enter a value  between %s and %s'
					},
                        notEmpty: {
                        message: 'Please enter value '
                    }
                   
                }
       },
	   
	   'subsidy_other_name_i[]':{
                validators: {
					 stringLength: {
                        min: 10,
                         max: 150,
                    }
                }
            },
	   
	   domain: {
                validators: {
                       notEmpty: { 
                   message: 'Please select domain'
                }
                }
            },
			subdomain: {
                validators: {
                       notEmpty: { 
                   message: 'Please select subdomain'
                }
                }
            },
			extrasubdomain: {
                validators: {
					 stringLength: {
                        min: 10,
                         max: 150,
                    },
                       notEmpty: { 
                   message: 'Please fill other subdomain'
                },
					regexp: {
                       regexp: /^[^*|\":<>[\]{}`\\()';!#@&$%^]+$/,
                        message: 'special characters  are not allowed'
                    }
                }
            },
			
			
	   subsidy_sca2scsp_amount_i: {
                validators: {
                        
                    greaterThan: {
					    value: 1,
					    message: 'Please enter a value greater than 0'
					},
                        notEmpty: {
                        message: 'Please enter value '
                    }
                   
                }
       },
	   cost_beneficiary: {
                validators: {
                        
                    between: {
					    min: 1000,
					    max: 2500000,
					    message: 'Please enter the amount between 1000 and 2500000'
					},
                        notEmpty: {
                        message: 'Please enter value '
                    }
                   
                }
       },
	   
	    tt_no_sca_beneficiary: {
                validators: {
                        
                    between: {
					    min: 2,
					    max: 2000000,
					    message: 'Please enter number  between 2 and 2000000'
					},
                        notEmpty: {
                        message: 'Please enter number '
                    }
                   
                }
       },
	   loan_bank_amount: {
                validators: {
                        
                    greaterThan: {
					    value: 1000,
					    message: 'Please enter a value equal or greater than  1000'
					},
                        notEmpty: {
                        message: 'Please enter value '
                    }
                   
                }
       },
	   
	   
	   

    }
});








