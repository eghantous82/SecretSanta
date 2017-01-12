import { Component } from '@angular/core';

@Component({
  template: `
    <ul class="input-list style-1 clearfix">
      <li>
        <table width="100%" style="padding-bottom: 10px; padding-left: 5px; padding-right: 5px">
          <td>
            <input class="style-1 focus" type="text" float="none" style="margin-right: 5px" placeholder="Name" class="focus"/>
          </td>
          <td>
            <input class="style-1 focus" type="text" placeholder="Email" style="margin-left: 5px"/>
          </td>
        </table>
        <a class="myButton">Add</a>
      </li>
    </ul>
    `
})
export class ParticipantsComponent {}

