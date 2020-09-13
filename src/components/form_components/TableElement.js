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
              return (
                <th>{header}</th>
              )
          })}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <DropDown id="device1_1" name="device1_1" title="" values={["SCR1"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="device2_1" name="device2_1" title="" values={["PE"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="vlan_1" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="subnet_1" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="entervalue_1" name="entervalue_1" title="" values={["/29", "/30"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
    </tr>
    <tr>
      <td>
        <DropDown id="device1_2" name="device1_2" title="" values={["SCR1"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="device2_2" name="device2_2" title="" values={["PE"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="vlan_2" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="subnet_2" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="entervalue_2" name="entervalue_2" title="" values={["/29", "/30"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
    </tr>
    <tr>
      <td>
        <DropDown id="device1_3" name="device1_3" title="" values={["SCR1"]}anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="device2_3" name="device2_3" title="" values={["PE"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="vlan_3" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="subnet_3" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="entervalue_3" name="entervalue_3" title="" values={["/29", "/30"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
    </tr>
    <tr>
      <td>
        <DropDown id="device1_4" name="device1_4" title="" values={["SCR1"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="device2_4" name="device2_4" title="" values={["PE"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="vlan_4" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <InputText limitedwidth id="subnet_4" text="" anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
      <td>
        <DropDown id="entervalue_4" name="entervalue_4" title="" values={["/29", "/30"]} anyEntryChanged={this.props.anyEntryChanged}/>
      </td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }

}
export default TableElement;