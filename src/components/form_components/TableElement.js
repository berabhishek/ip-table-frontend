import React from "react";
import DropDown from "./DropDown";
import InputText from "./InputText";
class TableElement extends React.Component {
    render() {

        return (
            <div>
                <table class="mdl-data-table mdl-js-data-table full-width">
  <thead>
    <tr>
          {this.props.headers.map((header)=> {
              if(!(this.props.device1 && this.props.device1.length <= 1 && header === "VLAN") )
              return (
                <th>{header}</th>
              )
          })}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {this.props.device1.length > 1 ? 
        <DropDown id="device1_1" name="device1_1" title="" values={this.props.device1} anyEntryChanged={() => this.props.updateConnections(1)}/>
          :
        <InputText limitedwidth id="device1_1" text="" anyEntryChanged={this.props.updateConnections}/>
      } 
      </td>
      <td>
        <DropDown id="device2_1" name="device2_1" title="" values={this.props.device2} anyEntryChanged={() => this.props.updateConnections(1)}/>
      </td>
      {this.props.device1.length > 1 ? 
      <td>
          <InputText limitedwidth id="vlan_1" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.vlans[0]}/>
        </td>
        : ''
        }
      <td>
        <InputText limitedwidth id="subnet_1" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.subnets[0]}/>
      </td>
      <td>
        <DropDown id="entervalue_1" name="entervalue_1" title="" values={this.props.entervaluerange} anyEntryChanged={()=>{this.props.enterValueChanged(1)}}/>
      </td>
    </tr>
    <tr>
      <td>
      {this.props.device1.length > 1 ? 
        <DropDown id="device1_2" name="device1_2" title="" values={this.props.device1} anyEntryChanged={() => this.props.updateConnections(2)}/>
          :
        <InputText limitedwidth id="device1_2" text="" anyEntryChanged={this.props.updateConnections}/>
      } 
       </td>
      <td>
        <DropDown id="device2_2" name="device2_2" title="" values={this.props.device2} anyEntryChanged={() => this.props.updateConnections(2)}/>
      </td>
      {this.props.device1.length > 1 ? 
      <td>
          <InputText limitedwidth id="vlan_2" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.vlans[1]}/>
        </td>
        : ''
        }
      <td>
        <InputText limitedwidth id="subnet_2" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.subnets[1]}/>
      </td>
      <td>
        <DropDown id="entervalue_2" name="entervalue_2" title="" values={this.props.entervaluerange} anyEntryChanged={()=>{this.props.enterValueChanged(2)}}/>
      </td>
    </tr>
    <tr>
      <td>
      {this.props.device1.length > 1 ? 
        <DropDown id="device1_3" name="device1_3" title="" values={this.props.device1} anyEntryChanged={() => this.props.updateConnections(3)}/>
          :
        <InputText limitedwidth id="device1_3" text="" anyEntryChanged={this.props.updateConnections}/>
      } 
         </td>
      <td>
        <DropDown id="device2_3" name="device2_3" title="" values={this.props.device2} anyEntryChanged={() => this.props.updateConnections(3)}/>
      </td>
      {this.props.device1.length > 1 ? 
      <td>
          <InputText limitedwidth id="vlan_3" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.vlans[2]}/>
        </td>
        : ''
        }
      <td>
        <InputText limitedwidth id="subnet_3" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.subnets[2]}/>
      </td>
      <td>
        <DropDown id="entervalue_3" name="entervalue_3" title="" values={this.props.entervaluerange} anyEntryChanged={()=>{this.props.enterValueChanged(3)}}/>
      </td>
    </tr>
    <tr>
      <td>
      {this.props.device1.length > 1 ? 
        <DropDown id="device1_4" name="device1_4" title="" values={this.props.device1} anyEntryChanged={() => this.props.updateConnections(4)}/>
          :
        <InputText limitedwidth id="device1_4" text="" anyEntryChanged={this.props.updateConnections}/>
      } 
        </td>
      <td>
        <DropDown id="device2_4" name="device2_4" title="" values={this.props.device2} anyEntryChanged={() => this.props.updateConnections(4)}/>
      </td>
      {this.props.device1.length > 1 ? 
      <td>
          <InputText limitedwidth id="vlan_4" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.vlans[3]}/>
        </td>
        : ''
        }
      <td>
        <InputText limitedwidth id="subnet_4" text="" anyEntryChanged={this.props.updateConnections} disabled value={this.props.subnets[3]}/>
      </td>
      <td>
        <DropDown id="entervalue_4" name="entervalue_4" title="" values={this.props.entervaluerange} anyEntryChanged={()=> {this.props.enterValueChanged(4)}}/>
      </td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }

}
export default TableElement;