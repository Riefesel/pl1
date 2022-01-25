# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

# Travel by bike from Signal Hill to Bannerman Park while stopping in at Cape Spear for a scenic view and then bike to the Watershed Coffee Shop on the way to refuel - Output imperial units (miles) because you are from the states visiting relatives in NL - Output in english because you cannot determine if english is the dominant language in the area due to accents

```
https://maps.googleapis.com/maps/api/directions/json?destination=place_id:ChIJVxeOQcCjDEsRKmf0IAnpGzA
&mode=bicycling
&language=en
&units=imperial
&origin=place_id:ChIJfbRY2s-jDEsR_n_qGjZY2aM
&waypoints=place_id:ChIJKbcVBmGYDEsRAq-38Ehw-yc
%7C
place_id:ChIJca0K68mXDEsRZeSsVR0VT80
&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:
```
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJfbRY2s-jDEsR_n_qGjZY2aM",
         "types" : [ "establishment", "park", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJKbcVBmGYDEsRAq-38Ehw-yc",
         "types" : [ "establishment", "natural_feature" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJca0K68mXDEsRZeSsVR0VT80",
         "types" : [ "cafe", "establishment", "food", "point_of_interest", "store" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJVxeOQcCjDEsRKmf0IAnpGzA",
         "types" : [ "establishment", "park", "point_of_interest", "tourist_attraction" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 47.5728497,
               "lng" : -52.6243339
            },
            "southwest" : {
               "lat" : 47.46472980000001,
               "lng" : -52.7194753
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "12.1 mi",
                  "value" : 19443
               },
               "duration" : {
                  "text" : "1 hour 29 mins",
                  "value" : 5329
               },
               "end_address" : "Cape Spear, St. John's, NL A1C 5H2, Canada",
               "end_location" : {
                  "lat" : 47.5160293,
                  "lng" : -52.6299706
               },
               "start_address" : "Signal Hill National Historic Site, 230 Signal Hill Rd, St. John's, NL A1A 1B3, Canada",
               "start_location" : {
                  "lat" : 47.5705368,
                  "lng" : -52.6814141
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 639
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 112
                     },
                     "end_location" : {
                        "lat" : 47.571317,
                        "lng" : -52.6864627
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e on \u003cb\u003eSignal Hill Rd\u003c/b\u003e toward \u003cb\u003eN Head Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{bjaHxip`IHU@G?GAGECCCcAo@SMMGKGGCAAKCICM?E?G@E@GBEBAFA@AL?H?HBH?B@DBFDFDHDF@Bd@n@f@n@NNHJDFDFHPFNHTF\\DXBP?DBT@P@R@R?N?@?HAL?L?NABAPARCPCRER?@GRGTABGRCFCHCDA?i@z@EFCHEHCJCJAJCJALAL?FEj@?FCt@GrB?LAL"
                     },
                     "start_location" : {
                        "lat" : 47.5705368,
                        "lng" : -52.6814141
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 mi",
                        "value" : 935
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 161
                     },
                     "end_location" : {
                        "lat" : 47.5716712,
                        "lng" : -52.69785539999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eSignal Hill Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "wgjaHjiq`I?BCLGRENIRSb@Q\\m@fACHCFKPCHCJ?@ADCJ?LAL?D?t@AF@l@?~AAx@?NAb@?DANANAL?DCRCPCTCRCJG`@e@rBCLIb@Gb@E\\Ib@?@Er@En@?BEr@A`@KhBAXEr@AP?PA`@?N?N@N@NBLBLBLFL?@fApB\\j@NZHPBFBFDRB`@Dr@l@xDBN@b@Fx@"
                     },
                     "start_location" : {
                        "lat" : 47.571317,
                        "lng" : -52.6864627
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "308 ft",
                        "value" : 94
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 47.570878,
                        "lng" : -52.6974336
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTemperance St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}ijaHrps`I`@Q@AdAe@\\MDCNI"
                     },
                     "start_location" : {
                        "lat" : 47.5716712,
                        "lng" : -52.69785539999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 mi",
                        "value" : 1689
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 333
                     },
                     "end_location" : {
                        "lat" : 47.5594774,
                        "lng" : -52.7117629
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWater St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_ejaH|ms`I@HTx@d@rAd@xAjAtDbAzCLZPb@Vn@FLTh@@@DJJNLPNNBD\\\\h@h@LP@@Xd@TZZ`@nBfCFJr@~@DFHLp@z@b@n@FFv@`ADFr@z@dCtCDF`@d@^f@XXtAxA@@VZRRLJjAdAHFVXx@|@jAlAzAhBHJHJFLHNFNHPFRPr@DF@BDHFHp@r@VTd@^jBlAz@d@h@VJDNLRP\\Z^Zd@\\HHd@b@"
                     },
                     "start_location" : {
                        "lat" : 47.570878,
                        "lng" : -52.6974336
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 mi",
                        "value" : 1340
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 307
                     },
                     "end_location" : {
                        "lat" : 47.5489138,
                        "lng" : -52.7194753
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eWater St\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "w}gaHngv`Id@DP?t@@p@@`ABdAEZBTFVHPFNHJFZJJBh@Vj@Zz@r@RPx@p@j@`@r@h@d@VPH?@fAf@x@\\z@\\v@^JF^RLHPLXPh@b@b@d@b@h@z@~@NPn@v@jAzAf@^\\h@^j@Xb@v@fA@@X\\NNNN`@\\`@Xp@d@XP^V^XDBVVTTv@bAz@dA"
                     },
                     "start_location" : {
                        "lat" : 47.5594774,
                        "lng" : -52.7117629
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.6 mi",
                        "value" : 13761
                     },
                     "duration" : {
                        "text" : "1 hour 0 mins",
                        "value" : 3577
                     },
                     "end_location" : {
                        "lat" : 47.5213023,
                        "lng" : -52.6276534
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBlack Head Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "u{eaHvww`IRs@HUJa@Hg@@Q@Q?S?A?YA[AUAUAi@?G?M?K@M@O@MHYHODKHG?AHCJ?FBB@HFLJbA|@^X\\Z`BtAXVDBVVJHPR\\^Z\\\\^b@f@JHHHJDHBH?B?B?DADADABCDC@A@C@C@AHQBE@G@G@I?G?I?I?EAEAKCMEMEMIMaAoAQUGK[c@s@gASYEKO[w@sBg@eBACYy@]y@MYO]M]EMGQIa@Ga@AKCYEe@Ae@AeB?qBCsJAu@?iA?a@@a@?Q@MBk@B]D[?ADYDWFYHUHUJULSHONYHIHMNUXc@Xc@DGT[Xc@\\k@FIHGFIHGFEFEBABCFCFAFCDAFAF?HAH?H@J@HBB@D@HDJDDBDDt@p@^Z\\Z@@z@x@ZZz@v@LJlA~@VRJDVPf@ZPJbAn@TNb@^`@^TRd@d@JJj@n@pA`BbB`CHNHNHNHNFPFPFRPj@HPFJFJFHHJFHHHJJJJNLLLHFnAdAJHTN@?RJLFJFHBJDVDHBJ?T@R?H?FAF?HCHAFCB?f@OpAe@nAe@HCv@a@@?`@W\\UVUNOXW\\_@lAuARUx@}@x@}@z@}@@Av@{@TY~@eAZ_@NOLMZ_@\\_@Z_@\\_@X[@C\\]TWDG\\]@AZ[TSZYJIPOJIXSZU\\SLININILG^O^OzAm@|@]hAc@`CaAFARI^K^I`@ETCNARAPAZAXAZ@F?L@T@D?\\FH@b@H`@Jb@JzBr@nDjA~Ab@fBh@?@b@JbAZb@LbAZb@LtBl@xAd@|EzAjDfAbCp@HBXJ`AZHBj@Lv@RD?t@Lz@N|@L@?j@FZ@`@?fA@jBAxE@|@?\\@L?jBDfA@t@BnA@`A?N?h@Ap@Gn@IBAZG\\KdAg@h@Yh@YXS\\]TYZc@T[Xg@Rc@Ti@Pa@Ng@L]BKNi@Jm@Je@Ji@Fe@Fe@B_@Ba@Be@@e@HeBDqB?K@g@BcABiA@q@@u@?g@?a@?S?_@?WC}@Ey@AO?MEc@Gu@AKEg@E]OeA?AGe@CKG_@Ki@GWCQK]CMQo@Uq@]eASe@ACSc@Wk@AAEK_@q@Wc@IMYe@AAMSe@o@i@y@IMs@gAs@gAs@gACEe@u@i@u@o@aAs@gAWc@Ye@A?GMOWu@sAKSGMACMWM[MY?AKYGQEKUw@YaAK_@Ia@Ia@I]Ia@G_@?AGe@Gg@CYAIGg@Gq@Cc@ASAOCa@A_@A]A]Au@?aA?aA@o@Bq@Bw@Bm@@EBk@@ABe@Dc@Fa@Ho@Fi@Ji@Lu@Py@?A@Cx@gE`AqE`AyEF_@DO\\aBLo@^kBl@wC\\aBLo@j@qCF[p@eD@EXuATwABQHe@Fk@Dc@Be@B_@Bi@@s@@iA?s@Aw@C}@KiBIy@Iw@Kw@ESCQG[I]Mg@Qo@Qk@Oc@Ma@Qa@]u@[g@KSIMSYW_@UYIImAqAe@c@a@a@_@[YWg@c@QMeCgBqB{AaBmA_EqCSQSOIIQM[W[WKMEECEOQY]U[MSOU{@uAg@w@UYW]Y[KOUWi@o@o@q@sAuA[]eBcBo@m@a@_@IGKIMISKMG_Aa@a@OKEKEOIQKUMSQSSMUKOKWKSEOIWIUGW?CAACOEUCIAIGg@AAUaB?Cc@qC?EKo@a@sCAEGa@AIAGMu@SkAAKCGIa@Om@AGSm@CESk@AESe@CGQ_@AAQ_@{B{DWi@KWIQGQK[CQEQESEi@AACYAc@A_@@_A?ED{@Fc@Hg@Pw@Pe@P]Tc@`@e@HKLINMVMRGv@YBAjDuA`@Q\\Kd@O~Ak@FCdBs@jAc@XMd@Sb@W`@]LODERYVa@FKLYNa@Na@Ji@DYD[Fk@Be@@c@?i@?_@AMAIC_@AWGc@Ia@COESK]GSQa@]{@Uk@Se@IWUo@Qs@Oo@Oo@OcAKw@Gs@I{@C]AW?AAOCo@Aq@?i@?aABgA@U@c@DcA?ADgAF_BDoADq@Bi@Dg@Bi@De@Fc@XqBZ_BTkANu@P_ABQDYB]Bc@?M?IA]Ca@E]CMG[IYGQCGEOI[G[Ig@AQCO?EAIAK?ACe@?KIgBAk@AGCs@Cs@Cs@Es@?CA]AQAIC]AICQCUCIAKGWEQCQGW"
                     },
                     "start_location" : {
                        "lat" : 47.5489138,
                        "lng" : -52.7194753
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 296
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 169
                     },
                     "end_location" : {
                        "lat" : 47.5200325,
                        "lng" : -52.6245165
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBlackhead Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "co`aHxye`INSBC@AHIRUFI@?RULOLKHGDEHEDE@?DGFGDIBIDK?ABIDWBOHa@BKF[@GH_@XqADSDS@S@Q?M?I?W?SCQEU"
                     },
                     "start_location" : {
                        "lat" : 47.5213023,
                        "lng" : -52.6276534
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "52 ft",
                        "value" : 16
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 47.5199621,
                        "lng" : -52.6243258
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eCape Spear Path\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eg`aHffe`IHa@@A?A@?"
                     },
                     "start_location" : {
                        "lat" : 47.5200325,
                        "lng" : -52.6245165
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 673
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 621
                     },
                     "end_location" : {
                        "lat" : 47.5160293,
                        "lng" : -52.6299706
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCape Spear Path\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e",
                     "polyline" : {
                        "points" : "wf`aH`ee`IZZD@\\DD@@?ZJB?D@N\\LRLNBBZPNLNDD@NDHLLRLJBBZVBBPj@Nj@?@?\\@VFl@@BDd@C`@IRJRVNNRBH@BHVLVFJFV@B\\xA?BBHBXCH?BJTFN@@Td@@@HPDV@@RTFD@@B@NBLA@?@?HJBLHF@@H?JZLRNF`@NTHLFRH"
                     },
                     "start_location" : {
                        "lat" : 47.5199621,
                        "lng" : -52.6243258
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "8.3 mi",
                  "value" : 13419
               },
               "duration" : {
                  "text" : "1 hour 2 mins",
                  "value" : 3731
               },
               "end_address" : "24 Main Rd, Petty Harbour, NL A0A 3H0, Canada",
               "end_location" : {
                  "lat" : 47.4647065,
                  "lng" : -52.7094239
               },
               "start_address" : "Cape Spear, St. John's, NL A1C 5H2, Canada",
               "start_location" : {
                  "lat" : 47.5160293,
                  "lng" : -52.6299706
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 690
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 625
                     },
                     "end_location" : {
                        "lat" : 47.5200325,
                        "lng" : -52.6245165
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eCape Spear Path\u003c/b\u003e toward \u003cb\u003eBlackhead Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e",
                     "polyline" : {
                        "points" : "en_aHhhf`ISIMGUIa@OOGMSK[I?AAIGCMIKA?A?M@OCCAAAGESUAAEWIQAAUe@AAGOKU?CBICYCI?C]yAACGWGKMWIWACCIOSWOKSHSBa@Ee@ACGm@AW?]?AOk@Qk@CC[WCCMKMSIMOEEAOEOM[QCCMOMSO]EAC?[KA?EA]EEA[[A??@A@I`@"
                     },
                     "start_location" : {
                        "lat" : 47.5160293,
                        "lng" : -52.6299706
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 296
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 47.5213023,
                        "lng" : -52.6276534
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBlackhead Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eg`aHffe`IDTBP?R?V?H?LAPARERERYpAI^AFGZCJI`@CNEVCH?@EJCHEHGFEFA?EDIDEDIFMJMNSTA?GHSTIHA@CBOR"
                     },
                     "start_location" : {
                        "lat" : 47.5200325,
                        "lng" : -52.6245165
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.2 mi",
                        "value" : 6806
                     },
                     "duration" : {
                        "text" : "33 mins",
                        "value" : 1953
                     },
                     "end_location" : {
                        "lat" : 47.5095114,
                        "lng" : -52.6983246
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBlackhead Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-11\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "co`aHxye`IFVBPDPFV@JBHBTBP@HB\\@H@P@\\?BDr@Br@Br@Br@@F@j@HfB?JBd@?@@J@H?DBN@PHf@FZHZDNBFFPHXFZBLD\\B`@@\\?H?LCb@C\\EXCPQ~@Ot@UjA[~AYpBGb@Ed@Ch@Ef@Ch@Ep@EnAG~AEfA?@EbAAb@ATCfA?`A?h@@p@Bn@@N?@@VB\\Hz@Fr@Jv@NbANn@Nn@Pr@Tn@HVRd@Tj@\\z@P`@FRJ\\DRBNH`@Fb@@VB^@H@L?^?h@Ab@Cd@Gj@EZEXKh@O`@O`@MXGJW`@SXEDMNa@\\c@Ve@RYLkAb@eBr@GB_Bj@e@N]Ja@PkDtAC@w@XSFWLOLMHIJa@d@Ub@Q\\Qd@Qv@If@Gb@Ez@?DA~@@^@b@BX@@Dh@DRDPBPJZFPHPJVVh@zBzDP^@@P^BFRd@@DRj@BDRl@@FNl@H`@BF@JRjALt@@F@HF`@@D`@rCJn@?Db@pC?BT`B@@Ff@@HBHDTBN@@?BFVHTHVDNJRJVJNLTRRRPTLPJNHJDJD`@N~@`@LFRJLHJHHF`@^n@l@dBbBZ\\rAtAn@p@h@n@TVJNXZV\\TXf@v@z@tANTLRTZX\\NPBDDDJLZVZVPLHHRNRP~DpC`BlApBzAdCfBPLf@b@XV^Z`@`@d@b@lApAHHTXV^RXHLJRZf@\\t@P`@L`@Nb@Pj@Pn@Lf@H\\FZBPDRJv@Hv@Hx@JhBB|@@v@?r@AhAAr@Ch@C^Cd@Eb@Gj@Id@CPUvAYtAADq@dDGZk@pCMn@]`Bm@vC_@jBMn@]`BENG^aAxEaApEy@fEAB?@Qx@Mt@Kh@Gh@In@G`@Eb@Cd@A@Cj@ADCl@Cv@Cp@An@?`A?`A@t@@\\@\\@^B`@@N@RBb@Fp@Ff@@HBXFf@Fd@?@F^H`@H\\H`@H`@J^X`ATv@DJFPJX?@LXLZLV@BFLJRt@rANVFL@?Xd@Vb@r@fAn@`Ah@t@d@t@BDr@fAr@fAr@fAHLh@x@d@n@LR@@Xd@HLVb@^p@DJ@@Vj@Rb@@BRd@"
                     },
                     "start_location" : {
                        "lat" : 47.5213023,
                        "lng" : -52.6276534
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.5 mi",
                        "value" : 5627
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1069
                     },
                     "end_location" : {
                        "lat" : 47.4647065,
                        "lng" : -52.7094239
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMaddox Cove Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-11\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow NL-11\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "me~`Hnss`IRKHC@AHAJCH?J?@?J?LBF@D@LDNDNFp@\\PFNJVPFBXP`@VDBTNHDZTd@TBBb@Tb@TVJFBfAZVHjA\\~Bp@bAZt@TLDFBZJD@fAZXJ`@Lp@RxAb@`@LDB`@Ld@LdBh@ZJD@\\JB@\\Jf@N\\J`@LdA\\`@Lb@LZJlAZ@@`@L^JB@\\NZJHD`@N`@PHBr@^D@^R`@R~Az@zAr@j@Xp@Zt@XPHfA^JDj@RVF@@z@TpAT`@Hd@H`BX`BTtAF^Bl@D~@BpBF~@@l@@Z@\\?^?JATAH?@?VAn@AbACBAD?lDUbAGjAGb@C`@AdAIv@Gr@KTETINERGTIZGJAFAZEB?ZGXA^E`@C^Cf@Gf@Kh@Gr@Of@K`@G^G\\E@?XAX@f@@t@FXDT@F?F@N@B?J?L?HAF?HARE`@MXOh@Y\\QBATMZMVITGTENCJAd@ET?jAAj@CR?b@Cr@En@E~Ek@b@ExFo@lAKpCW`@Eb@Eb@Eb@GF?ZEfAIHAXCb@ED?TCN?H@H@L@HBLBJDLFJFd@d@T^x@bBd@|@`@x@T\\XXNLb@^p@^DBt@LH@l@Ll@Rd@PFBZLZJNDRBL?TALARCLC^IBAb@KDAXI@?JCVK\\Q@ABA\\YV]@C@ANa@@ALm@@ELa@BGL[PWPSTUHEBCDEZQTKDABAHCVC^E@?B?^C`@EVEJAXC\\CZCP@B?F@PDPNRVLXDJDTBV?H@Z@J@PB`@BJ@JDLBFDHLPDFDH@@HPBH@D@H?D@N@NAR?JAN?@AJABANANABCb@C^C`@?RAPA\\?B?\\?T?^AP?D?`@?d@@V?BAL?Z?B?H@n@?^BXPp@DPFZLp@VfABJ"
                     },
                     "start_location" : {
                        "lat" : 47.5095114,
                        "lng" : -52.6983246
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "9.7 mi",
                  "value" : 15648
               },
               "duration" : {
                  "text" : "1 hour 6 mins",
                  "value" : 3936
               },
               "end_address" : "Bannerman Park, Military Rd, St. John's, NL A1C 5M2, Canada",
               "end_location" : {
                  "lat" : 47.5709126,
                  "lng" : -52.7059463
               },
               "start_address" : "24 Main Rd, Petty Harbour, NL A0A 3H0, Canada",
               "start_location" : {
                  "lat" : 47.4647065,
                  "lng" : -52.7094239
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "3.5 mi",
                        "value" : 5627
                     },
                     "duration" : {
                        "text" : "23 mins",
                        "value" : 1379
                     },
                     "end_location" : {
                        "lat" : 47.5095114,
                        "lng" : -52.6983246
                     },
                     "html_instructions" : "Head \u003cb\u003enortheast\u003c/b\u003e on \u003cb\u003eMain Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-11\u003c/b\u003e toward \u003cb\u003eCribbies Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow NL-11\u003c/div\u003e",
                     "polyline" : {
                        "points" : "mmu`Hzxu`ICKWgAMq@G[EQQq@CY?_@Ao@?I?C?[@M?CAW?e@?a@?E@Q?_@?U?]?C@]@Q?SBa@B_@Bc@@C@O@O@C@K?A@O?K@SAOAO?EAIAECIIQAAEIEGMQEICGEMAKCKCa@AQAKA[?ICWEUEKMYSWQOQEGAC?QA[B]BYBK@WDa@D_@BC?A?_@DWBIBC@E@UJ[PEDCBIDUTQRQVMZCFM`@ADMl@A@O`@A@ABW\\]XC@A@]PWJKBA?YHE@c@JC@_@HMBSBM@U@M?SCOE[K[MGCe@Qm@Sm@MIAu@MECq@_@c@_@OMYYU]a@y@e@}@y@cBU_@e@e@KGMGKEMCICMAIAIAO?UBE?c@DYBI@gAH[DG?c@Fc@Dc@Da@DqCVmAJyFn@c@D_Fj@o@Ds@Dc@BS?k@BkA@U?e@DK@OBUDUFWH[LULC@]Pi@XYNa@LSDI@G?I@M?K?C?OAGAG?UAYEu@Gg@AYAY@A?]D_@Fa@Fg@Js@Ni@Fg@Jg@F_@Ba@B_@DY@[FC?[DG@K@[FUHSFODUHUDs@Jw@FeAHa@@c@BkAFcAFmDTE?C@cABo@@W@A?I?U@K@_@?]?[Am@A_AAqBG_ACm@E_@CuAGaBUaBYe@Ia@IqAU{@UAAWGk@SKEgA_@QIu@Yq@[k@Y{As@_B{@a@S_@SEAs@_@ICa@Qa@OIE[K]OCA_@Ka@MAAmA[[Kc@Ma@MeA]a@M]Kg@O]KCA]KEA[KeBi@e@Ma@MECa@MyAc@q@Sa@MYKgA[EA[KGCMEu@UcA[_Cq@kA]WIgA[GCWKc@Uc@UCCe@U[UIEUOECa@WYQGCWQOKQGq@]OGOEMEEAGAMCK?A?K?I?KBI@A@IBSJ"
                     },
                     "start_location" : {
                        "lat" : 47.4647065,
                        "lng" : -52.7094239
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.3 mi",
                        "value" : 6892
                     },
                     "duration" : {
                        "text" : "30 mins",
                        "value" : 1770
                     },
                     "end_location" : {
                        "lat" : 47.5486549,
                        "lng" : -52.7187431
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBlackhead Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "me~`Hnss`I\\dATp@Pn@BLJ\\BPFVJh@F^BJFd@?@NdAD\\Df@@JFt@Db@?L@NDx@B|@?V?^?R?`@?f@At@Ap@ChACbAAf@?JEpBIdBAd@Cd@C`@C^Gd@Gd@Kh@Kd@Kl@Oh@CJM\\Of@Q`@Uh@Sb@Yf@UZ[b@UX]\\YRi@Xi@XeAf@]J[FC@o@Hq@Fi@@O?aA?oAAu@CgAAkBEM?]A}@?yEAkB@gAAa@?[Ak@GA?}@M{@Ou@ME?w@Sk@MICaA[YKICcCq@kDgA}E{AyAe@uBm@c@McA[c@McA[c@K?AgBi@_Bc@oDkA{Bs@c@Ka@Kc@IIA]GE?UAMAG?[AY@[@Q@S@O@UBa@D_@H_@JSHG@aC`AiAb@}@\\{Al@_@N_@NMFOHOHMH]R[TYRKHQNKH[XUR[ZA@]\\EFUV]\\ABYZ]^[^]^[^MLON[^_AdAUXw@z@A@{@|@y@|@y@|@STmAtA]^YVONWT]Ta@VA?w@`@IBoAd@qAd@g@NC?GBI@IBG?G@I?S?UAK?ICWEKEICKGMGSKA?UOKIoAeAIGMMOMKKKKIIGIIKGIGKGKIQQk@GSGQGQIOIOIOIOcBaCqAaBk@o@KKe@e@USa@_@c@_@UOcAo@QKg@[WQKEWSmA_AMK{@w@[[{@y@AA][_@[u@q@EEECKEIEEACAICKAIAI?I@G?G@E@GBG@GBCBC@GDGDIFGHIFGH]j@Yb@UZEFYb@Yb@OTILIHOXINMRKTITITGXEVEX?@EZC\\Cj@AL?PA`@?`@?hA@t@BrJ?pB@dB@d@Dd@BX@JF`@H`@FPDLL\\N\\LX\\x@Xx@@Bf@dBv@rBNZDJRXr@fAZb@FJPT`AnAHLDLDLBL@J@D?D?H?H?FAHAFAFCDIPA@ABABA@EBCBE@E@E@C?C?I?ICKEIIKIc@g@]_@[]]_@QSKIWWECYWaBuA][_@YcA}@MKIGCAGCK?IB?@IFEJINIXALANAL?J?L?F@h@@T@T@Z?X?@?RAPAP"
                     },
                     "start_location" : {
                        "lat" : 47.5095114,
                        "lng" : -52.6983246
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 426
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 76
                     },
                     "end_location" : {
                        "lat" : 47.5518067,
                        "lng" : -52.7164418
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWater St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "azeaHbsw`Ie@~@GFE@CBI@I?IEqA_AUUWWEC_@Y_@WYQq@e@a@Ya@]OOOOY]AAw@gAYc@_@k@]i@"
                     },
                     "start_location" : {
                        "lat" : 47.5486549,
                        "lng" : -52.7187431
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 mi",
                        "value" : 1862
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 356
                     },
                     "end_location" : {
                        "lat" : 47.56616409999999,
                        "lng" : -52.7049038
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eWater St\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "ymfaHvdw`IWaAmA}A}@oAmAkAu@u@i@e@]WWQYOm@Wa@QaAc@y@Y[KQISKSKi@Ws@i@i@a@{@q@SQ}@s@k@[k@YGAMGMGSISK[KYEa@EcA@gA?m@?u@CO?a@Ck@KIIe@]_@[][SQOMKEi@W{@e@kBmAe@_@WUq@s@GIEIACEGQs@GSIQGOIOGMIKIK{AiBkAmAy@}@WYIGkAeAMKSSW[AAuAyAYY_@g@a@e@EGeCuC"
                     },
                     "start_location" : {
                        "lat" : 47.5518067,
                        "lng" : -52.7164418
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "200 ft",
                        "value" : 61
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 75
                     },
                     "end_location" : {
                        "lat" : 47.5665286,
                        "lng" : -52.7055078
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePrescott St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ogiaHr|t`IWf@Wf@Yh@"
                     },
                     "start_location" : {
                        "lat" : 47.56616409999999,
                        "lng" : -52.7049038
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 341
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 66
                     },
                     "end_location" : {
                        "lat" : 47.5688576,
                        "lng" : -52.7025495
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDuckworth St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yiiaHl`u`IsByCk@{@o@{@Yc@II_@g@QWmBiC}@eA"
                     },
                     "start_location" : {
                        "lat" : 47.5665286,
                        "lng" : -52.7055078
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 307
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 168
                     },
                     "end_location" : {
                        "lat" : 47.57134139999999,
                        "lng" : -52.7043477
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCochrane St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kxiaH|mt`Ii@\\_Aj@_BbA_@XeAv@_CxA_@T_@V"
                     },
                     "start_location" : {
                        "lat" : 47.5688576,
                        "lng" : -52.7025495
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "433 ft",
                        "value" : 132
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 47.5709126,
                        "lng" : -52.7059463
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMilitary Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{gjaHdyt`IVhDBZDT@HDLFNZl@FL"
                     },
                     "start_location" : {
                        "lat" : 47.57134139999999,
                        "lng" : -52.7043477
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "{bjaHxip`IHm@mAw@{Ak@g@b@T`AzBvCp@|COfFoB`FUnGcAxCkAhCExFoAfLmAfQVvBlCpFz@~GH|Ab@SxBaAbBpFfFzNhC|C~Q~UlQpRlAzCfHtFfE|CjAh@fA@tEBlDrAlI`GnHjDxG|G~G|InEfDrAjArBhC\\iAXmBAkAAuCz@qAtLrK`BdA`@WFcCoEsG}DsKcAeEOyXVcEdAwCnFsHlBKpLvJfGlEpHtJfDzFjDbClBTfK{Dp[a]|QkIhEg@dCJj`@fLhTrGvHhAdSHjLKnGcDlDyGtA}G^yKOgS{@iGuBcHcJiOqKeQiDuMq@ePdB}QfL}j@~BaNHwKgAsJ{CiIuEuFoNyKgIiGcDwEwPwQ}DgBcBqBcCkMwCePaHwOGkGt@iDrAsBrIqDvJqDrDgDpAoGOaFmBaGaC}J_@yGbAcXzB}MScEy@uDUgEo@gLDwBvAyAlAwC~@}E@_DjA`@pBdB~AlA`ArBHdBE~Av@`AhAxDn@~Bt@lAtD~BcB}@s@_AgA{@s@oBeAaE_@y@c@c@Lu@QoBa@wB_BuAqBmBiBq@AbCu@tEiArDkAdAg@j@G`A`@nCVlG`AdKh@|DiA|HwAhMa@~LLtGtBnL|BlG^dEu@`HgCvDwVvJuChFQjHt@bD|ElJ`D`P|B|MjAtBdErBzOxOtInK`S~N`GpGpCrGpAfHRtNsAzJ_L|i@yB`Ma@dG^dQxC`NtJlPdKnPTf@f@X`@K~@FhInEfTbHpa@vMvKhFxHxBnNxAzIHlVyAfK_B`G{@fEVnBWdEkBl]uCrOmAfCdBvCxF~BfBnEjA`DZbCk@tB_BrAuDrByAzGk@~@n@\\rAN|B~@jD[|GTdKr@fDe@yBe@wEHcJL_FgAyDeAaDcC@}FpAiBzDqAdBkCz@wCJkEsAqCqAaB_C{CgFs@Y{B?k`@zDkHVgDjAcD`AuCSoOzAiMdBiSn@yQoAgHcBySkJcOsE_QkFeMwDsDuBgGmCk@DKDHpAv@lC^rBp@`GPdG{@dXgBzGcE`GyHbCcMKsQMeHqA_g@eOcMkDoC?wDn@cMbFcI|GiOtPaGvFyGdCuD]{FiFqAeDuIiKcPgMkBoAy@?mDtD_CrDs@nCBf_@hBrFxE`LpClE?dA{@x@gKgJ}CmBi@jBFlD{@fCcEoCoEgDqGaKkFwF}BqA}GuCkI{FcAe@{CU{DC}Bw@_IiFwC}D{CuEmHoHqC}Cg@m@eCuCWf@q@pA_DuEsBqC_CaD}@eAi@\\_DnBeBpA_DnBG`EPhAj@jA"
         },
         "summary" : "Black Head Rd",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : [ 0, 1 ]
      }
   ],
   "status" : "OK"
}
```
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50% (COMPLETE)
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
