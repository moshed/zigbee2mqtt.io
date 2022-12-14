"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93735],{327017:(e,o,t)=>{t.r(o),t.d(o,{data:()=>d});const d=JSON.parse('{"key":"v-75461cec","path":"/devices/6735_6736_6737.html","title":"Busch-Jaeger 6735/6736/6737 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Busch-Jaeger 6735/6736/6737 control via MQTT","description":"Integrate your Busch-Jaeger 6735/6736/6737 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Known issues","slug":"known-issues","link":"#known-issues","children":[]},{"level":3,"title":"Action values","slug":"action-values","link":"#action-values","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1671034965000},"filePathRelative":"devices/6735_6736_6737.md"}')},215155:(e,o,t)=>{t.r(o),t.d(o,{default:()=>b});var d=t(166252);const i=(0,d._)("h1",{id:"busch-jaeger-6735-6736-6737",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#busch-jaeger-6735-6736-6737","aria-hidden":"true"},"#"),(0,d.Uk)(" Busch-Jaeger 6735/6736/6737")],-1),n=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"6735/6736/6737")],-1),c=(0,d._)("td",null,"Vendor",-1),a=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Zigbee Light Link power supply/relay/dimmer")],-1),l=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"switch (state), action, linkquality")],-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/6735-6736-6737.jpg",alt:"Busch-Jaeger 6735/6736/6737"})])],-1),h=(0,d.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>If there are blinking LEDs wait until they don’t blink anymore — the device is in some mode we don’t want it to be.</li><li>Press both buttons of the top row (or sole row for Model 6735) until the LEDs gleam permanently. They will blink alternately at first but keep the buttons pressed until really both lights are constantly illuminated. Then release the buttons. The LEDs should still glow.</li><li>Now press both buttons again briefly. After about 1..2 seconds they will fade-glow; and your bridge should now instantly find it.</li></ol><h3 id="known-issues" tabindex="-1"><a class="header-anchor" href="#known-issues" aria-hidden="true">#</a> Known issues</h3><h4 id="bottom-row-of-4-gang-device-not-bound" tabindex="-1"><a class="header-anchor" href="#bottom-row-of-4-gang-device-not-bound" aria-hidden="true">#</a> Bottom row of 4-gang device not bound</h4>',5),u={href:"https://github.com/Koenkk/zigbee2mqtt/discussions/7009",target:"_blank",rel:"noopener noreferrer"},p=(0,d.uE)('<table><thead><tr><th>Source EP</th><th>Destination</th><th>Destination EP</th><th>Clusters</th></tr></thead><tbody><tr><td><code>10</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td>6710 U: <code>LevelCtrl</code><br>6711 U: <code>OnOff</code> [^1]</td></tr><tr><td><code>11</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr><tr><td><code>12</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr><tr><td><code>13</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr></tbody></table><p>*[EP]: Endpoint [^1]: Depending on whether the control panel sits on a 6710 U (power supply) or 6711 U (relay), <code>OnOff</code> respectively <code>LevelCtrl</code> shall be used.</p><h3 id="action-values" tabindex="-1"><a class="header-anchor" href="#action-values" aria-hidden="true">#</a> Action values</h3><p>This device send the following <code>action</code> values in its payload:</p><table><thead><tr><th>Left buttons</th><th>(long-hold-release)</th><th>Right buttons</th></tr></thead><tbody><tr><td><code>row_1_off</code><br><code>row_1_down</code></td><td><code>row_1_stop</code></td><td><code>row_1_on</code><br><code>row_1_up</code></td></tr><tr><td><code>row_2_off</code><br><code>row_2_down</code></td><td><code>row_2_stop</code></td><td><code>row_2_on</code><br><code>row_2_up</code></td></tr><tr><td><code>row_3_off</code><br><code>row_3_down</code></td><td><code>row_3_stop</code></td><td><code>row_3_on</code><br><code>row_3_up</code></td></tr><tr><td><code>row_4_off</code><br><code>row_4_down</code></td><td><code>row_4_stop</code></td><td><code>row_4_on</code><br><code>row_4_up</code></td></tr></tbody></table><p>Briefly pressing and releasing a button triggers the <code>off</code> resp. <code>on</code> actions for the given row, long-pressing triggers the <code>down</code>/<code>up</code> state respectively (after about one second). When releasing then, a <code>stop</code> will be issued with no distinction between the left or right button.</p>',6),_=(0,d._)("h2",{id:"options",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,d.Uk)(" Options")],-1),w=(0,d.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>row_1_on</code>, <code>row_1_off</code>, <code>row_1_up</code>, <code>row_1_down</code>, <code>row_1_stop</code>, <code>row_2_on</code>, <code>row_2_off</code>, <code>row_2_up</code>, <code>row_2_down</code>, <code>row_2_stop</code>, <code>row_3_on</code>, <code>row_3_off</code>, <code>row_3_up</code>, <code>row_3_down</code>, <code>row_3_stop</code>, <code>row_4_on</code>, <code>row_4_off</code>, <code>row_4_up</code>, <code>row_4_down</code>, <code>row_4_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),g={},b=(0,t(983744).Z)(g,[["render",function(e,o){const t=(0,d.up)("RouterLink"),g=(0,d.up)("ExternalLinkIcon");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[n,(0,d._)("tbody",null,[r,(0,d._)("tr",null,[c,(0,d._)("td",null,[(0,d.Wm)(t,{to:"/supported-devices/#v=Busch-Jaeger"},{default:(0,d.w5)((()=>[(0,d.Uk)("Busch-Jaeger")])),_:1})])]),a,l,s])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,d._)("p",null,[(0,d.Uk)("It may occur that the bottom row of the 4-gang device 6737 does not work like the other ones, i.e. does not emit the actions (see related discussion "),(0,d._)("a",u,[(0,d.Uk)("#7009"),(0,d.Wm)(g)]),(0,d.Uk)("). The reason is not fully understood yet, however it can be worked around by unbinding all four endpoints and re-binding them manually one after another:")]),p,(0,d.kq)(" Notes END: Do not edit below this line "),_,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[(0,d.Uk)("How to use device type specific configuration")])),_:1})])]),w])}]])}}]);