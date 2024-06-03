import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-aggrid-integration',
  templateUrl: './aggrid-integration.component.html',
  styleUrls: ['./aggrid-integration.component.less']
})
export class AggridIntegrationComponent {
  form = new FormGroup({});
  model: any = {
    name: 'name1',
    surname: 'surname1',
    investments: [
      {
        investmentName: 'project1',
        investmentDate: '',
        stockIdentifier: 1,
      },
      {
        investmentName: 'project2',
        investmentDate: '2004-06-20',
        stockIdentifier: 2,
      },
      {
        investmentName: 'project3',
        investmentDate: '',
        stockIdentifier: 3,
      },
      {
        investmentName: 'project4',
        investmentDate: '',
        stockIdentifier: 4,
      },
      {
        investmentName: 'project5',
        investmentDate: '',
        stockIdentifier: 5,
      },
      {
        investmentName: 'project6',
        investmentDate: '',
        stockIdentifier: 6,
      },
    ],
    investments2: [
      {
        investmentName: 'project1',
        investmentDate: '2004-06-20',
        stockIdentifier: 1,
      },
      {
        investmentName: 'project2',
        investmentDate: '2004-06-20',
        stockIdentifier: 2,
      },
      {
        investmentName: 'project3',
        investmentDate: '2004-06-21',
        stockIdentifier: 3,
      },
      {
        investmentName: 'project4',
        investmentDate: '2004-06-21',
        stockIdentifier: 4,
      },
      {
        investmentName: 'project5',
        investmentDate: '2004-06-22',
        stockIdentifier: 5,
      },
      {
        investmentName: 'project6',
        investmentDate: '2004-06-20',
        stockIdentifier: 6,
      },
    ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      type: 'tabs',
      props: {
        isSubmit: false,
      },
      fieldGroup: [
        {
          props: { label: 'Row Grouping' },
          fieldGroup: [{
            className: 'section-label',
            template: '<h5>Personal data</h5>',
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                key: 'name',
                type: 'input',
                className: 'col-md-6',
                props: {
                  label: 'Name',
                  required: true,
                },
              },
              {
                key: 'surname',
                type: 'input',
                className: 'col-md-6',
                props: {
                  label: 'Surname',
                  required: true,
                },
              },
            ],
          },
          {
            key: 'investments2',
            type: 'aggrid-rowgroup',
            className: 'ag-theme-balham',
            props: {
              height: '200px',
              groupingKey: 'investmentDate',
              gridOptions: {
                rowHeight: 42,
                columnDefs: [
                  {
                    headerName: 'Name of Investment',
                    field: 'investmentName',
                    sortable: true,
                    width: 350,
                  },
                  {
                    headerName: 'Date of Investment',
                    field: 'investmentDate',
                    sortable: true,
                    width: 350,
                  },
                  {
                    headerName: 'Stock Identifier',
                    field: 'stockIdentifier',
                    // width: 330,
                  },
                  {
                    headerName: 'Name of Investment',
                    field: 'investmentName',
                    sortable: true,
                    width: 350,
                  },
                  {
                    headerName: 'Date of Investment',
                    field: 'investmentDate',
                    sortable: true,
                    width: 350,
                  },
                  {
                    headerName: 'Stock Identifier',
                    field: 'stockIdentifier',
                    // width: 330,
                  },
                ],
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  type: 'input',
                  key: 'investmentName',
                  props: {
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'investmentDate',
                  props: {
                    type: 'date',
                  },
                },
                {
                  type: 'input',
                  key: 'stockIdentifier',
                },
              ],
            },
          }],
        },
        {
          props: { label: 'Basic Aggrid with formly' },
          fieldGroup: [{
            key: 'investments',
            type: 'aggrid',
            className: 'ag-theme-balham',
            props: {
              height: '200px',
              gridOptions: {
                rowHeight: 42,
                columnDefs: [
                  {
                    headerName: 'Name of Investment',
                    field: 'investmentName',
                    sortable: true,
                    width: 350,
                  },
                  {
                    headerName: 'Date of Investment',
                    field: 'investmentDate',
                    sortable: true,
                    width: 350,
                  },
                  {
                    headerName: 'Stock Identifier',
                    field: 'stockIdentifier',
                    // width: 330,
                  },
                ],
              },
            },
            fieldArray: {
              fieldGroup: [
                {
                  type: 'input',
                  key: 'investmentName',
                  props: {
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'investmentDate',
                  props: {
                    type: 'date',
                  },
                },
                {
                  type: 'input',
                  key: 'stockIdentifier',
                },
              ],
            },
          },
          {
            className: 'section-label',
            template: '<h5>Personal data</h5>',
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                key: 'name',
                type: 'input',
                className: 'col-md-6',
                props: {
                  label: 'Name',
                  required: true,
                },
              },
              {
                key: 'surname',
                type: 'input',
                className: 'col-md-6',
                props: {
                  label: 'Surname',
                  required: true,
                },
              },
            ],
          }],
        }
      ],
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
