import React, { Component } from 'react';
import { isValidJson } from '../utils/isValidJson';
import { csvContentHeaderIsCorrect } from '../Constants/csvFileHeader';

class Controls extends Component {

  onJsonFileImportChange = e => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = e => {
      var content = e.target.result;
      if (!isValidJson(content)) {
        alert('that\'s not valid json, is it mate');
        return;
      }
      this.props.onImportJson(JSON.parse(content));
    };
  }

  onCsvFileImportChange = e => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = e => {
      const content = e.target.result;
      if (!csvContentHeaderIsCorrect(content)) {
        alert('I don\'t like the header of that file\'s content');
        return;
      }
      const newState = { rows: [] };
      const lines = content.split("\n");
      for (let i = 1; i < lines.length; i++) {
        let cols = lines[i].split(",");
        console.log(cols);
        let obj = {};
        if(cols[0].length < 1 || cols[1].length < 1){
          break;
        }
        obj.id = cols[0];
        obj.case = cols[1];
        obj.expectedResult = cols[2];
        obj.actualResult = cols[3];
        obj.iPhoneTested = cols[4].toLowerCase() === "true";
        obj.zebraTested = cols[5].toLowerCase() === "true";
        obj.iPadTested = cols[6].toLowerCase() === "true";
        obj.desktopTested = cols[7].toLowerCase() === "true";
        obj.status = cols[8].toLowerCase();
        newState.rows.push(obj);
      }
      this.props.onImportJson(newState);
    }

  }
  render() {
    return (
      <div>
        <button
          style={{ float: "right" }}
          className="button-danger pure-button"
          onClick={this.props.onResetData}
        >
          Reset data
        </button>
        <div className="u-margin-bottom">
          <button
            className="button-warning pure-button"
            onClick={() => document.getElementById("jsonFileInput").click()}
          >
            Import json
          </button>
          <button
            className="button-warning pure-button u-margin-left"
            onClick={() => document.getElementById("csvFileInput").click()}
          >
            Import CSV
          </button>
          <button
            className="button-secondary pure-button u-margin-left"
            onClick={this.props.onExportJson}
          >
            Export json
          </button>
          <button
            className="button-secondary pure-button u-margin-left"
            onClick={this.props.onExportTxt}
          >
            Export txt
          </button>
          <button
            className="button-secondary pure-button u-margin-left"
            onClick={this.props.onExportCsv}
          >
            Export CSV
          </button>
          <input
            type="file"
            id="jsonFileInput"
            className="u-display-none"
            onChange={this.onJsonFileImportChange}
          />
          <input
            type="file"
            id="csvFileInput"
            className="u-display-none"
            onChange={this.onCsvFileImportChange}
          />
        </div>
      </div>);
  }
}

export default Controls;