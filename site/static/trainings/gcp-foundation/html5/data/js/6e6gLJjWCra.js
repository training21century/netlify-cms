window.globalProvideData('slide', '{"title":"Activity - Survey Question","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide10","width":1560,"height":1170,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6e6gLJjWCra","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6piq9Sz6YQV.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5wOA0i8kpez"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5qIZTYdzddg.InvalidPromptSlide"}}]}]},"ReviewInt_5oFcpmbabcK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6piq9Sz6YQV"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5oFcpmbabcK","typea":"var","valueb":"5vgPAMXZBPt","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10111101101"}]}]},"ReviewIntCorrectIncorrect_5oFcpmbabcK":{"kind":"actiongroup","actions":[]},"AnsweredInt_5oFcpmbabcK":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5oFcpmbabcK"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111101101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111101101"}]}]},"DisableChoices_5oFcpmbabcK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6piq9Sz6YQV"},"enabled":{"type":"boolean","value":false}}]},"5oFcpmbabcK_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5wOA0i8kpez.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5oFcpmbabcK"}]}]},"SetLayout_pxabnsnfns10111101101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111101101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111101101"}]}]},"NavigationRestrictionNextSlide_6e6gLJjWCra":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6hQoHmeR2WZ"}}]},"NavigationRestrictionPreviousSlide_6e6gLJjWCra":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111101101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111101101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5qIZTYdzddg","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5qIZTYdzddg","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5oFcpmbabcK","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5oFcpmbabcK"}],"elseActions":[{"kind":"exe_actiongroup","id":"5oFcpmbabcK_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5oFcpmbabcK","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5oFcpmbabcK","typea":"var","valueb":"5vgPAMXZBPt","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5vgPAMXZBPt"},"completed_slide_ref":{"type":"string","value":"_player.61qrdqeRUm6.6hQoHmeR2WZ"}}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6e6gLJjWCra"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6e6gLJjWCra"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":30,"id":"6Vb5Y44IkgV"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":18750,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6piq9Sz6YQV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6D957b5UyLL"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6Vb5Y44IkgV"}},{"kind":"media_play","objRef":{"type":"string","value":"6Vb5Y44IkgV"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"6Vb5Y44IkgV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6FU46vjpCS6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jBDg24mY0G"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry3","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":2000,"placeholder":"type your text here","fontsize":36,"textcolor":"0x000000","bold":false,"italic":false,"font":"Calibri Charset0_v2mWipD31519F7","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":75,"yPos":369,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":715.5,"rotateYPos":345.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6piq9Sz6YQV","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":1412,"height":692,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":270,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":218}}},"html5data":{"xPos":-1,"yPos":-1,"width":1433,"height":693,"strokewidth":1}},"width":1432,"height":692,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":1433,"bottom":693,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":217}}},"id":"6piq9Sz6YQV","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry3","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6D957b5UyLL_-1273456184","id":"01","linkId":"txt__default_6D957b5UyLL","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":1468,"bottom":284,"pngfb":false,"pr":{"l":"Lib","i":220}}}],"shapemaskId":"","xPos":52,"yPos":57,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":739,"rotateYPos":144.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1478,"bottom":289,"altText":"\\nPlease write, in a few sentences or a short paragraph, what might be some issues faced by a Principal Investigator when medical care decisions for an enrolled subject might conflict or deviate from the study protocol. Click “    ” (bottom right of screen) when finished.","pngfb":false,"pr":{"l":"Lib","i":219}},"html5data":{"xPos":-1,"yPos":-1,"width":1479,"height":290,"strokewidth":0}},"width":1478,"height":289,"resume":true,"useHandCursor":true,"id":"6D957b5UyLL"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6FU46vjpCS6_-755785658","id":"01","linkId":"txt__default_6FU46vjpCS6","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":83,"bottom":31,"pngfb":false,"pr":{"l":"Lib","i":221}}}],"shapemaskId":"","xPos":0,"yPos":1134,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":106,"rotateYPos":18,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":212,"bottom":36,"altText":" Slide 10","pngfb":false,"pr":{"l":"Lib","i":37}},"html5data":{"xPos":-1,"yPos":-1,"width":213,"height":37,"strokewidth":0}},"width":212,"height":36,"resume":true,"useHandCursor":true,"id":"6FU46vjpCS6"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":524,"yPos":284,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24.5,"rotateYPos":21.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":51,"bottom":45,"altText":"Checkmark 1","pngfb":false,"pr":{"l":"Lib","i":222}},"html5data":{"xPos":-1,"yPos":-1,"width":51,"height":45,"strokewidth":1}},"width":50,"height":44,"resume":true,"useHandCursor":true,"id":"5jBDg24mY0G"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5oFcpmbabcK_CorrectReview","id":"01","linkId":"5oFcpmbabcK_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":821,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":224}}}],"shapemaskId":"","xPos":0,"yPos":1130,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":780,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1560,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":223}},"html5data":{"xPos":1,"yPos":1,"width":1557,"height":37,"strokewidth":2}},"width":1560,"height":40,"resume":false,"useHandCursor":true,"id":"5oFcpmbabcK_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5oFcpmbabcK_IncorrectReview","id":"01","linkId":"5oFcpmbabcK_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":828,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":226}}}],"shapemaskId":"","xPos":0,"yPos":1130,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":780,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1560,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":225}},"html5data":{"xPos":1,"yPos":1,"width":1557,"height":37,"strokewidth":2}},"width":1560,"height":40,"resume":false,"useHandCursor":true,"id":"5oFcpmbabcK_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');