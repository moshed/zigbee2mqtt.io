"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40559],{591088:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-3c28644c","path":"/guide/usage/touchlink.html","title":"Touchlink","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Scan","slug":"scan","link":"#scan","children":[]},{"level":2,"title":"Identify","slug":"identify","link":"#identify","children":[]},{"level":2,"title":"Factory reset device","slug":"factory-reset-device","link":"#factory-reset-device","children":[]}],"git":{"updatedTime":1671034965000},"filePathRelative":"guide/usage/touchlink.md"}')},821207:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var i=o(166252);const a=(0,i.uE)('<h1 id="touchlink" tabindex="-1"><a class="header-anchor" href="#touchlink" aria-hidden="true">#</a> Touchlink</h1><p><strong>Important:</strong> The touchlinking function <strong>only</strong> works with Zigbee Coordinator adapters based on a Texas Instruments ZNP adapters (TI chips starting with &quot;CC&quot;, e.g. CC2652) and Silicon Labs EZSP adapters (Silabs chips starting with &quot;EFR32&quot;, e.g. EFR32MG21) with touchlink enabled in the Zigbee Coordinator firmware.</p><p>Touchlink is a feature of Zigbee which allows devices physically close to each other to communicate with each other <strong>without</strong> being in the same network.</p><p>Note that not all Zigbee devices support Touchlink, but most bulbs of common brands like Philips and IKEA support this.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All commands below can also be executed via the frontend <em>Touchlink</em> tab.</p></div><h2 id="scan" tabindex="-1"><a class="header-anchor" href="#scan" aria-hidden="true">#</a> Scan</h2><p>This allows to scan for Touchlink enabled devices. The outcome of this scan can be used later to determine what device to factory reset. To scan send a MQTT message to <code>zigbee2mqtt/bridge/request/touchlink/scan</code> with an empty payload. The response will be send to <code>zigbee2mqtt/bridge/response/touchlink/scan</code>, example payload: <code>{&quot;data&quot;:{&quot;found&quot;:[{&quot;ieee_address&quot;: &#39;0x12345678&#39;, &quot;channel&quot;: 12}, {&quot;ieee_address&quot;: &#39;0x12654321&#39;, &quot;channel&quot;: 24}]},&quot;status&quot;:&quot;ok&quot;}</code>.</p><h2 id="identify" tabindex="-1"><a class="header-anchor" href="#identify" aria-hidden="true">#</a> Identify</h2><p>This allows to identify (e.g. bulb blinking) a device via Touchlink. To identify send a MQTT message to <code>zigbee2mqtt/bridge/request/touchlink/identify</code> with payload e.g. <code>{&quot;ieee_address&quot;: &#39;0x12345678&#39;, &quot;channel&quot;: 12}</code> (use scan from above to determine <code>ieee_address</code> and <code>channel</code>).</p><h2 id="factory-reset-device" tabindex="-1"><a class="header-anchor" href="#factory-reset-device" aria-hidden="true">#</a> Factory reset device</h2>',10),n={href:"https://www.youtube.com/watch?v=kcRj77YGyKk",target:"_blank",rel:"noopener noreferrer"},s=(0,i.uE)("<p>To factory reset a device through Touchlink bring the device close (&lt; 10 cm) to your Zigbee Coordinator (e.g. Zigbee USB adapter). After this send a MQTT message to <code>zigbee2mqtt/bridge/request/touchlink/factory_reset</code> with an empty payload.</p><p>Zigbee2MQTT will now start scanning, this can take up to 1 minute and during this scan <strong>your network cannot be used</strong>. After some time the device will identify itself (e.g. a bulb will start to blink).</p><p>Now that your device has been factory reset, it will automatically join Zigbee2MQTT (make sure that joining is enabled through <code>permit_join: true</code>). If it doesn&#39;t, try powering the bulb off and on 1 time.</p><p>In case you want to factory reset a specific device (which can be found through a scan, see above) request the factory reset with the following payload: <code>{&quot;ieee_address&quot;: &quot;0x12345678&quot;, &quot;channel&quot;: 12}</code>.</p>",4),c={},r=(0,o(983744).Z)(c,[["render",function(e,t){const o=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[a,(0,i._)("p",null,[(0,i.Uk)("Zigbee2MQTT allows to factory reset devices through Touchlink. This is especially handy for e.g. Philips Hue bulbs as they cannot be factory reset by turning them on/off 5 times. Demo: "),(0,i._)("a",n,[(0,i.Uk)("video"),(0,i.Wm)(o)])]),s])}]])}}]);