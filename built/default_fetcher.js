"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2018 David Waite
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
require("whatwg-fetch");
var node_fetch_1 = require("node-fetch");
var fetcher;
if (typeof window !== 'undefined') {
    fetcher = { fetch: window.fetch.bind(window) };
}
else {
    fetcher = { fetch: node_fetch_1.default };
}
exports.default = fetcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdF9mZXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlZmF1bHRfZmV0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILHdCQUFzQjtBQUN0Qix5Q0FBcUM7QUFFckMsSUFBSSxPQUFvQixDQUFDO0FBRXpCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbEMsT0FBTyxHQUFHLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUE7QUFDOUMsQ0FBQztBQUFDLElBQUksQ0FBQyxDQUFDO0lBQ04sT0FBTyxHQUFHLEVBQUMsS0FBSyxFQUFFLG9CQUFrQixFQUFnQixDQUFDO0FBQ3ZELENBQUM7QUFFRCxrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTggRGF2aWQgV2FpdGVcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZVxuICogTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAnd2hhdHdnLWZldGNoJztcbmltcG9ydCBub2RlRmV0Y2hlciBmcm9tICdub2RlLWZldGNoJztcblxubGV0IGZldGNoZXI6IEdsb2JhbEZldGNoO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZmV0Y2hlciA9IHtmZXRjaDogd2luZG93LmZldGNoLmJpbmQod2luZG93KX1cbn0gZWxzZSB7XG4gIGZldGNoZXIgPSB7ZmV0Y2g6IG5vZGVGZXRjaGVyIGFzIGFueX0gYXMgR2xvYmFsRmV0Y2g7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7Il19