import React, { Component } from 'react';
import {EventService} from '../service/EventService';
import {CountryService} from '../service/CountryService';
import {CarService} from '../service/CarService';
import {NodeService} from '../service/NodeService';
import { Route } from 'react-router-dom';

import {InputText} from 'primereact/components/inputtext/InputText';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {AutoComplete} from 'primereact/components/autocomplete/AutoComplete';
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';
import {Calendar} from 'primereact/components/calendar/Calendar';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {DataGrid} from 'primereact/components/datagrid/DataGrid';
import {Tree} from 'primereact/components/tree/Tree';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Menu} from 'primereact/components/menu/Menu';
import {PanelMenu} from 'primereact/components/panelmenu/PanelMenu';
import {InputMask} from 'primereact/components/inputmask/InputMask';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {Password} from 'primereact/components/password/Password';
import {Spinner} from 'primereact/components/spinner/Spinner';
import {Slider} from 'primereact/components/slider/Slider';
import {ListBox} from 'primereact/components/listbox/ListBox';
import {RadioButton} from 'primereact/components/radiobutton/RadioButton';
import {PickList} from 'primereact/components/picklist/PickList';
import {OrderList} from 'primereact/components/orderlist/OrderList';
import {ToggleButton} from 'primereact/components/togglebutton/ToggleButton';
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';
import {Button} from 'primereact/components/button/Button';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';
import {Panel} from 'primereact/components/panel/Panel';
import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';
import {Dialog} from 'primereact/components/dialog/Dialog';
import {Column} from 'primereact/components/column/Column';

export class RegisterEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEvent: {}
    }
  }

    render() {
       console.log(this.props.selectedEvent);
        return (
            <div className="ui-g ui-fluid">
                      
            <div className="card card-w-title">
      <h3>Register Event</h3>
      <div className="ui-g form-group">
          
          <table className="table-width-full">
          <form onSubmit={this.handleSubmit}>
         <div className="ui-g form-group">
          
    <label htmlFor="teamName">Team Name</label>
    <input type="text" className="form-control" id="teamName" name="teamName" placeholder="Enter Team Name"/>
  </div>
  <div className="form-group">
  <label htmlFor="teamSize">Team Size</label>
    <input type="number" className="form-control" id="teamSize" name="teamSize" placeholder="Enter Team Size"/>
  </div>
  <div className="form-group">
  <label htmlFor="portfolio">Portfolio</label>
    <input type="text" className="form-control" id="portfolio" name="portfolio" placeholder="Enter Portfolio"/>
  </div>
  <div className="form-group">
  <label htmlFor="location">Location</label>
    <input type="text" className="form-control" id="location" name="location" placeholder="Enter Location"/>
  </div>
  <div className="form-group">
  <label htmlFor="techStack">Technology Stack</label>
    <textarea className="form-control" id="techStack" name="techStack" placeholder="Enter Technology Stack"/>
  </div>
  <div className="form-group">
  <label htmlFor="teamPoc">POC</label>
    <input type="text" className="form-control" id="teamPoc" name="teamPoc" placeholder="Enter Event POC"/>
  </div>
  <div className="form-group">
    <label htmlFor="teamMembers">Team Members</label>
    <textarea className="form-control" id="teamMembers" name="teamMembers"placeholder="Team Members"/>
  </div>

  
  <button type="submit" className="btn btn-danger">Submit</button>
  </form>
          </table>
         
          </div></div>
          </div>
        
        );
      }
    }
