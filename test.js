this.AP = this.AP || {};
this.AP.handlebars = this.AP.handlebars || {};
this.AP.handlebars.display = this.AP.handlebars.display || {};
this.AP.handlebars.display.skinfinder = this.AP.handlebars.display.skinfinder || {};
this.AP.handlebars.display.skinfinder["diagnosis-loading"] = Handlebars.template({
	compiler: [7, "\x3e\x3d 4.0.0"],
	main: function (b, a, c, f, e) {
		return '\x3cdiv class\x3d"layer_popup fullpage"\x3e\n\t\x3cdiv class\x3d"layer_wrap"\x3e \n\t\t\x3cdl class\x3d"layer"\x3e\n\t\t\t\x3cdt class\x3d"layer_title"\x3e\ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \ud53c\ubd80\uc9c4\ub2e8\x3c/dt\x3e\n\t\t\t\x3cdd class\x3d"layer_cont"\x3e\n\t\t\t\t\x3cdiv class\x3d"loading_result"\x3e\n                    \x3cp class\x3d"txt"\x3e\uc544\ubaa8\ub808 \ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \x3cbr\x3e\ud53c\ubd80\uc9c4\ub2e8 \uacb0\uacfc\ub97c \ubd84\uc11d\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4\x3c/p\x3e\n                    \x3cdiv class\x3d"img_loading-1"\x3e\n                        \x3c!-- \x3cspan class\x3d"spin_img"\x3e\x3c/span\x3e 20200421 \uc0ad\uc81c --\x3e\n                    \x3c/div\x3e\n                    \x3csmall class\x3d"txt"\x3e\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694\x3c/small\x3e\n                \x3c/div\x3e\n\t\t\t\x3c/dd\x3e\n\t\t\x3c/dl\x3e\n\t\t\x3cbutton class\x3d"layer_close" type\x3d"button"\x3e\x3ci class\x3d"ficon ficon-close-30"\x3e\x3c/i\x3e\x3cspan class\x3d"sr_only"\x3e\ub808\uc774\uc5b4 \ub2eb\uae30\x3c/span\x3e\x3c/button\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n \n\x3c!--/* \ud558\ub2e8 js\ub4f1\uc744 \uc2e4\ud589\ud558\ub294 \ub9c8\uc9c0\ub9c9 \uc601\uc5ed */--\x3e\n\x3cth:block ap:fragment\x3d"layout-endpoint"\x3e\n\t\x3cscript\x3e\n\n\t\tanimation (\'[class*\x3dimg_loading-]\', 12, 100); // 20200421 \uc218\uc815\n\t\t\n\t\x3c/script\x3e\n\x3c/th:block\x3e\n'
	},
	useData: !0
});
this.AP = this.AP || {};
this.AP.handlebars = this.AP.handlebars || {};
this.AP.handlebars.display = this.AP.handlebars.display || {};
this.AP.handlebars.display.skinfinder = this.AP.handlebars.display.skinfinder || {};
this.AP.handlebars.display.skinfinder["diagnosis-step"] = Handlebars.template({
	compiler: [7, "\x3e\x3d 4.0.0"],
	main: function (b, a, c, f, e) {
		var d;
		c = b.lambda;
		b = b.escapeExpression;
		return '\n\x3cdiv class\x3d"skin_diagnosis"\x3e\n\t\n\t\x3cdiv class\x3d"step_area step01"\x3e\n\t\t\x3cspan class\x3d"step" value\x3d"' + b(c(null != (d = null != a ? a.data : a) ? d.nxtBtpDgnsCompId : d, a)) + '"\x3eSTEP' + b(c(null != (d = null != a ? a.data : a) ? d.step : d, a)) + '\x3c/span\x3e\n\t\t\x3cinput type\x3d"hidden" class\x3d"ogBtpDgnsCompId" value\x3d"' +
			b(c(null != (d = null != a ? a.data : a) ? d.btpDgnsCompId : d, a)) + '" /\x3e\n\t\t\x3cinput type\x3d"hidden" class\x3d"nxtBtpDgnsCompId" value\x3d"' + b(c(null != (d = null != a ? a.data : a) ? d.nxtBtpDgnsCompId : d, a)) + '" /\x3e\n\t\t\x3cinput type\x3d"hidden" class\x3d"nowStep" value\x3d"' + b(c(null != (d = null != a ? a.data : a) ? d.step : d, a)) + '" /\x3e\n\t\t\x3cinput type\x3d"hidden" class\x3d"totStep" value\x3d"' + b(c(null != (d = null != a ? a.data : a) ? d.totStep : d, a)) + '" /\x3e\n\t\t\x3cp class\x3d"heading"\x3e' + b(c(null != (d = null != a ? a.data : a) ? d.stepNm :
				d, a)) + '\x3c/p\x3e\n\t\t\n\t\t\x3c!-- 20200514 progress bar \ucd94\uac00 --\x3e\n\t\t\x3cdiv class\x3d"step_progress"\x3e\n\t\t\t\x3cspan class\x3d"bar" style\x3d"width:0%"\x3e\x3c/span\x3e\n\t\t\x3c/div\x3e\n\t\t\t\t\t\t\t\n\t\x3c/div\x3e\n\t\n\t\x3cdiv class\x3d"diagnosis_test_wrap"\x3e\n\t\t\x3cp class\x3d"question"\x3e' + b(c(null != (d = null != a ? a.data : a) ? d.dgnsQustTxt : d, a)) + "\x3c/p\x3e\n\t\t\n\t\t\x3cdiv class\x3d\"select_list_group\"\x3e\n\t\t\x3c/div\x3e\n\t\x3c/div\x3e\n\n\x3c/div\x3e\n \n\x3cdiv class\x3d\"bottom-btn-group equal-btn-group\"\x3e\n\t\x3cbutton type\x3d'button' id\x3d'qustBefore' class\x3d'btn-core btn-large btn-graylight-line' style\x3d'display: none;' ap-click-area\x3d'\uc9c4\ub2e8\ub808\uc774\uc5b4' ap-click-name\x3d'CTA\ubc84\ud2bc \uc804\uccb4'\x3e\uc774\uc804\x3c/button\x3e\n\t\x3cbutton type\x3d'button' id\x3d'qustNext' class\x3d'btn-core btn-large btn-black' ap-click-area\x3d'\uc9c4\ub2e8\ub808\uc774\uc5b4' ap-click-name\x3d'CTA\ubc84\ud2bc \uc804\uccb4' disabled\x3e\ub2e4\uc74c\x3c/button\x3e\n\t\x3cbutton type\x3d'button' id\x3d'qustComplte' class\x3d'btn-core btn-large btn-purple' style\x3d'display: none;' ap-click-area\x3d'\uc9c4\ub2e8\ub808\uc774\uc5b4' ap-click-name\x3d'CTA\ubc84\ud2bc \uc804\uccb4' disabled\x3e\uc644\ub8cc\x3c/button\x3e\n\x3c/div\x3e\n\n\n\x3cscript\x3e\n\t\n\t//\ud604\uc7ac \uc2a4\ud15d\ubc88\ud638\n\tvar nowStep \x3d parseInt( $('.nowStep').val() );\n\t//\ucd1d \uc2a4\ud15d\ubc88\ud638\n\tvar totStep \x3d $('.totStep').val();\n\t//\ud504\ub85c\uadf8\ub798\uc2a4 \ubc14 style \uc801\uc6a9 \uae30\uc900\uac12\t\n\tvar perCent \x3d 100;\n\t//\uc2a4\ud15d\ubcc0\uacbd\uc2dc \ub9c8\ub2e4 \ud504\ub85c\uadf8\ub798\uc2a4 \ubc14 style \uc801\uc6a9 \uae30\uc900\uac12\n\tvar stepPerCent \x3d perCent/totStep;\n\t\n\t$('.bar').css(\"width\", stepPerCent*nowStep+'%'); \n\t\n\t\n\t//\uc774\uc804\ubc84\ud2bc \ud074\ub9ad\n\t$('#qustBefore').on('click',function() {\n\t\n\t\tvar moveCnt \x3d AP.common.getLocalStorage('moveCnt');\n\t\t\n\t\tif(moveCnt \x3d\x3d 1){\n\t\t\tbeforeQuestionList( AP.common.getLocalStorage('newBtnDgnsCompId'+parseInt(moveCnt-1)), moveCnt );\n\t\t}else{\n\t\t\tbeforeQuestionList( AP.common.getLocalStorage('newBtnDgnsCompId'+parseInt(moveCnt-2)), moveCnt );\n\t\t}\n\t\t\n\t });\n\t//\ub2e4\uc74c\ubc84\ud2bc \ud074\ub9ad\n\t$('#qustNext').on('click',function() {\n\t\t//\uc120\ud0dd\uc9c0 \uc120\ud0dd\uc5ec\ubd80 \uccb4\ud06c \ubcc0\uc218\n\t\tvar isChk \x3d false;\n\t\t\n\t\t//\uc120\ud0dd\uc9c0\ubcc4 \ucd5c\uc18c \ud558\ub098\uc758 \uc120\ud0dd\uac12\uc774 \uc5c6\ub294 \uacbd\uc6b0 '\ub2e4\uc74c' \ubc84\ud2bc \ube44\ud65c\uc131\ud654\n\t\tfor(var i\x3d0; i\x3c$('.select_list_items').length; i++){\n\t\t\tvar items \x3d $('.select_list_items');\n\t\t\t\n\t\t\tif(items[i].getElementsByClassName('selected').length \x3d\x3d 0){\n\t\t\t\tisChk \x3d true; \n\t\t\t}\n\t\t}\n\t\t\n\t\tif(isChk \x3d\x3d false){\n\t\t\t//\uc120\ud0dd\uc9c0\uc5d0 \uc9c8\ubb38\uc774\ub3d9 key\ub97c \uac00\uc9c0\uace0 \uc788\ub294\uacbd\uc6b0 \ud574\ub2f9 \uc9c8\ubb38\uc73c\ub85c \uc774\ub3d9\n\t\t\tif( AP.common.getLocalStorage('moveBtpDgnsCompId') !\x3d null ){\n\t\t\t\tnxtBtpDgnsCompId \x3d AP.common.getLocalStorage('moveBtpDgnsCompId');\n\t\t\t}else{\n\t\t\t\tnxtBtpDgnsCompId \x3d $('.nxtBtpDgnsCompId').val();\n\t\t \t}\n\t\t \t\n\t\t \tconsole.log('nxtBtpDgnsCompId \x3d '+nxtBtpDgnsCompId);\n\t\t \t\n\t\t\tif(nxtBtpDgnsCompId !\x3d ''){\n\t\t\t\n\t\t\t\tnewQuestionList(nxtBtpDgnsCompId);\n\t\t\t\t \n\t\t\t}\n\t\t}\n\t\t\n\t\t \n\t });\n\t//\uc644\ub8cc\ubc84\ud2bc \ud074\ub9ad\n\t$('#qustComplte').on('click',function() {\n\t\t\n\t\t//\uac01\uc9c8\ubb38\uc5d0 \ub300\ud55c \uc120\ud0dd\uac12 \uac00\uc838\uc624\uae30\n\t\tvar moveCnt \x3d AP.common.getLocalStorage('moveCnt');\n\t\tconsole.log('moveCnt \x3d '+moveCnt);\n\t\t\n\t\tvar dgnsDisrItem \x3d [];\n\t\tvar dgnsDisrItem2 \x3d [];\n\t\tfor(var i\x3d0; i\x3cmoveCnt; i++){\n\t\t\tif(i \x3d\x3d 0){\n\t\t\t\tdgnsDisrItem \x3d AP.common.getLocalStorage('dgnsDisrItem'+0);\n\t\t\t}else{\n\t\t\t\tdgnsDisrItem2 \x3d dgnsDisrItem.concat(AP.common.getLocalStorage('dgnsDisrItem'+i));\n\t\t\t\tdgnsDisrItem \x3d dgnsDisrItem2;\n\t\t\t}\n\t\t\t \n\t\t}  \n\t\t \n\t\tconsole.log('dgnsDisrItem \x3d'+JSON.stringify(dgnsDisrItem));\n\t\t\n\t\t//\uc9c4\ub2e8 \uacb0\uacfc \ub85c\ub529 \ubaa8\ub2ec\n\t\tAP.skinFinder.diagnosisOpen('display.skinfinder.diagnosis-loading', '', '\ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \ud53c\ubd80\uc9c4\ub2e8');\n\t\t\n\t\t//\ub85c\ub529 \ud31d\uc5c5 \ud45c\ucd9c \ud6c4 2\ucd08\ub3d9\uc548 \uc720\uc9c0 \ud6c4 \uc9c4\ub2e8\uc2dc\uc791\ud558\uae30 \uc2e4\ud589\n\t\tsetTimeout(function() { \n\t\t\t//\uc9c8\ubb38\uc120\ud0dd\uc9c0 \uc800\uc7a5 API \uc694\uccad\n\t\t\tAP.api.saveQuestionDistractor(null, JSON.stringify({dgnsDisrItem: dgnsDisrItem})).done(function(result){\n\t\t\t\t\n\t\t\t\tfor(var i\x3d0; i\x3cmoveCnt; i++){\n\t\t\t\t\t//\uc120\ud0dd\uc9c0 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6b0\uae30\n\t\t\t\t\tAP.common.clearLocalStorage('dgnsDisrItem'+moveCnt);\n\t\t\t\t}\n\t\t\t\tAP.common.setLocalStorage(\"moveCnt\", 1);\n\t\t\t\t\n\t\t\t\tconsole.log(\"custDgnsDttm \x3d\"+result.custDgnsDttm);\n\t\t\t\tconsole.log(\"custDgnsDttm \x3d\"+result.custDgnsDttm.replace('+09', ''));\n\t\t\t\tvar custDgnsDttm \x3d result.custDgnsDttm;\n\t\t\t\t  \n\t\t\t\tclearInterval(animationInterval); \n\t\t\t\t \n\t\t\t\t//\uc9c4\ub2e8\uacb0\uacfc \ud398\uc774\uc9c0 \uc774\ub3d9\n\t\t\t\tlocation.href \x3d contextPath + '/display/detailResultList?displayMenuId\x3dskinFinder\x26custDgnsDttm\x3d'+custDgnsDttm;\n\t\t\t\t \n\t\t\t}).fail(function(e) {\n\t\t\t\t//\uc2e4\ud328\n\t\t\t\tAP.modal.alert(e.errorMessage);\n\t\t\t});\n\t\t}, 2000);  \n\t\t\n\t });\n\t \n\t function newQuestionList(nxtBtpDgnsCompId){\n\t \n\t\tAP.api.diagnosis(null, {nxtBtpDgnsCompId : nxtBtpDgnsCompId}).done(function(result){\n\t\t\t\n\t\t\tvar moveCnt \x3d AP.common.getLocalStorage(\"moveCnt\");\n\t\t\t\n\t\t\tAP.common.setLocalStorage('newBtnDgnsCompId'+moveCnt, result.btpDgnsCompId);\n\t\t\t\n\t\t\tAP.common.setLocalStorage('moveCnt', moveCnt+1);\n\t\t\t\n\t\t\tvar data \x3d new Object();\n\t\t\tdata.data \x3d result;\n\t\t\t \n\t\t\tvar stepHtml \x3d AP.common.getTemplate('display.skinfinder.diagnosis-step', data);\n\t\t\tvar typeHtml \x3d AP.common.getTemplate('display.skinfinder.diagnosis-jindan-type', result);\n\t\t\t \n\t\t\t$( '.layer_cont' ).html(stepHtml);\n\t\t\t$( '.diagnosis_test_wrap' ).append(typeHtml);\n\t\t\t$('#qustBefore').show();\n\t\t\t\n\t\t\t//\ub2e4\uc74c \uc774\ub3d9\ud560 \uc9c8\ubb38 key\uac00 \uc5c6\ub2e4\uba74 \uc644\ub8cc\ubc84\ud2bc \ud45c\ucd9c \ub2e4\uc74c\ubc84\ud2bc \uc228\uae30\uae30\n\t\t\tif(result.nxtBtpDgnsCompId \x3d\x3d ''){\n\t\t\t\t$('#qustNext').hide(); \n\t\t\t\t$('#qustComplte').show();\n\t\t\t}\n\t\t\t\n\t\t\t \n\t\t }).fail(function(e) {\n\t\t\t//\uc2e4\ud328\n\t\t\tAP.modal.alert(e.errorMessage);\n\t\t});\n\t\t \n\t}\n\t\n\tfunction beforeQuestionList(nxtBtpDgnsCompId, cnt){\n\t \n\t\tAP.api.diagnosis(null, {nxtBtpDgnsCompId : nxtBtpDgnsCompId}).done(function(result){\n\t\t\t\t\n\t\t\tAP.common.setLocalStorage('moveCnt', cnt-1);\n\t\t\t\n\t\t\tvar data \x3d new Object();\n\t\t\tdata.data \x3d result;\n\t\t\t \n\t\t\tvar stepHtml \x3d AP.common.getTemplate('display.skinfinder.diagnosis-step', data);\n\t\t\tvar typeHtml \x3d AP.common.getTemplate('display.skinfinder.diagnosis-jindan-type', result);\n\t\t\t\n\t\t\t$( '.layer_cont' ).html(stepHtml);\n\t\t\t$( '.diagnosis_test_wrap' ).append(typeHtml);\n\t\t\t$('#qustBefore').show();\n\t\t\t\n\t\t\tif(cnt \x3d\x3d 2){\n\t\t\t\t$('#qustBefore').hide(); \n\t\t\t}\n\t\t\t\n\t\t\t//\uc774\uc804\uc73c\ub85c \ub3cc\uc544\uac08\uc2dc \uc774\uc804\ud398\uc774\uc9c0\uc5d0\uc11c \ud45c\uc2dc\ud55c \ud56d\ubaa9 selected\ud558\uae30\n\t\t\tvar json \x3d AP.common.getLocalStorage('dgnsDisrItem'+parseInt(cnt-2));\n\t\t\t\n\t\t\tconsole.log( '\uc774\uc804\ud398\uc774\uc9c0\uc5d0\uc11c \ud45c\uc2dc\ud55c \ud56d\ubaa9 selected\ud558\uae30 \x3d'+JSON.stringify(json));\t\t\n\t\t\t\n\t\t\t\n\t\t\tfor(var j\x3d0; j\x3cjson.length; j++){\n\t\t\t\t\n\t\t\t\tvar btpDgnsCompId \x3d json[j].btpDgnsCompId;\n\t\t\t\tvar itemSn \x3d json[j].disrItemSn;\n\t\t\t\t\n\t\t\t\tconsole.log('btpDgnsCompId \x3d'+btpDgnsCompId);\n\t\t\t\tconsole.log('itemSn \x3d'+itemSn);\n\t\t\t\t\n\t\t\t\t$this \x3d $('#'+btpDgnsCompId+'_itemSn'+itemSn);\n\t\t\t\t$parent \x3d $('#'+btpDgnsCompId+'_itemSn'+itemSn).parent('.select_list_items');\n\t\t\t\t//\uba40\ud2f0\ud53d\uc774\uc5c7\ub2e4\uba74 \uc22b\uc790\ud45c\uc2dc \uc704\ud55c \ucc98\ub9ac\n\t\t\t\tif($parent.hasClass('multi_pick')) {\n\t\t\t\t\tvar _maxPick \x3d Number($parent.attr('data-pick')), _selectNum \x3d Number($this.siblings('.select_item.selected').length), _crntNum \x3d _selectNum+1;\n\t\t\t\t\n\t\t\t\t\tif(_maxPick \x3e _selectNum) {\n\t\t\t\t\t\tif(!$this.hasClass('selected')) {\n\t\t\t\t\t\t\t$this.addClass('selected').attr('data-num', _crntNum).append('\x3ci class\x3d\"num\"\x3e' + _crntNum + '\x3c/i\x3e');\n\t\t\t\t\t\t}else {\n\t\t\t\t\t\t\tvar _thisNum \x3d Number($this.attr('data-num'));\n\t\t\t\t\t\t\t$this.siblings('.select_item.selected').each(function () {\n\t\t\t\t\t\t\t\tvar _siblingsNum \x3d Number($(this).attr('data-num'));\n\t\t\t\t\t\t\t\tif(_thisNum \x3c _siblingsNum) {\n\t\t\t\t\t\t\t\t\t$(this).attr('data-num', _siblingsNum -1).children('i').text(_siblingsNum -1);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t$this.removeClass('selected').removeAttr('data-num').children('i').remove();\n\t\t\t\t\t\t};\n\t\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif(!$this.hasClass('selected')) {\n\t\t\t\t\t\t\t$this.siblings('.select_item.selected').each(function () {\n\t\t\t\t\t\t\t\tvar _siblingsNum \x3d Number($(this).attr('data-num'));\n\t\t\t\t\t\t\t\tif(_siblingsNum \x3d\x3d 1) {\n\t\t\t\t\t\t\t\t\t$(this).removeClass('selected').removeAttr('data-num').children('i').remove();\n\t\t\t\t\t\t\t\t}else {\n\t\t\t\t\t\t\t\t\t$(this).attr('data-num', _siblingsNum -1).children('i').text(_siblingsNum -1);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t$this.addClass('selected').attr('data-num', _selectNum).append('\x3ci class\x3d\"num\"\x3e' + _selectNum + '\x3c/i\x3e');\n\t\t\t\t\t\t}else { \n\t\t\t\t\t\t\tvar _thisNum \x3d Number($this.attr('data-num'));\n\t\t\t\t\t\t\t$this.siblings('.select_item.selected').each(function () {\n\t\t\t\t\t\t\t\tvar _siblingsNum \x3d Number($(this).attr('data-num'));\n\t\t\t\t\t\t\t\tif(_thisNum \x3c _siblingsNum) {\n\t\t\t\t\t\t\t\t\t$(this).attr('data-num', _siblingsNum -1).children('i').text(_siblingsNum -1);\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t$this.removeClass('selected').removeAttr('data-num').children('i').remove();\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t};\n\t\t\t\t\t};\n\t\t\t\t}else{\n\t\t\t\t\t//\uba40\ud2f0\ud53d\uc774 \uc544\ub2cc \ub2e8\uc77c\ud53d\uc774\ub77c\uba74 \n\t\t\t\t\t$this.addClass('selected');\n\t\t\t\t\t\n\t\t\t\t\t//\uc751\ub2f5\uac12\uc911 'moveBtpDgnsCompId' \uac12\uc774 \uc788\ub294\uacbd\uc6b0 LocalStorage\uc5d0 \uc14b\ud305\n\t\t\t\t\tif( $this.children('.moveBtpDgnsCompId').text() !\x3d \"\" ){\n\t\t\t\t\t\tconsole.log('moveBtpDgnsCompId \x3d '+AP.common.getLocalStorage('moveBtpDgnsCompId'));\n\t\t\t\t\t\tAP.common.setLocalStorage('moveBtpDgnsCompId', $this.children('.moveBtpDgnsCompId').text());\n\t\t\t\t\t\tconsole.log('moveBtpDgnsCompId \x3d '+AP.common.getLocalStorage('moveBtpDgnsCompId'));\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t}//for end\n\t\t\t\n\t\t\t//\uc120\ud0dd\uc9c0 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6b0\uae30\n\t\t\t//\ud604\uc7ac \ud398\uc774\uc9c0 \uc120\ud0dd\uac12\n\t\t\tAP.common.clearLocalStorage('dgnsDisrItem'+parseInt(cnt-1));\n\t\t\t//\uc774\uc804 \ud398\uc774\uc9c0 \uc120\ud0dd\uac12\n\t\t\t//AP.common.clearLocalStorage('dgnsDisrItem'+parseInt(cnt-2));\n\t\t\t\n\t\t\tfor(var i\x3d0; i\x3ccnt; i++){\n\t\t\t\tconsole.log('moveCnt \x3d '+cnt);\n\t\t\t\tconsole.log( 'dgnsDisrItem'+i+' \x3d '+JSON.stringify( AP.common.getLocalStorage('dgnsDisrItem'+i) ) );\n\t\t\t}\n\t\t\t\n\t\t\t$('#qustNext').prop(\"disabled\", false);\n\t\t\t\n\t\t }).fail(function(e) {\n\t\t\t//\uc2e4\ud328\n\t\t\tAP.modal.alert(e.errorMessage);\n\t\t });//diagnosis api \ud568\uc218 end\n\t\t \n\t}\n\t\n\x3c/script\x3e"
	},
	useData: !0
});
this.AP = this.AP || {};
this.AP.handlebars = this.AP.handlebars || {};
this.AP.handlebars.display = this.AP.handlebars.display || {};
this.AP.handlebars.display.skinfinder = this.AP.handlebars.display.skinfinder || {};
this.AP.handlebars.display.skinfinder["diagnosis-jindan-type"] = Handlebars.template({
	1: function (b, a, c, f, e) {
		var d;
		f = null != a ? a : b.nullContext || {};
		var g = c.helperMissing;
		return "\x3cdiv class\x3d'select_list_group'\x3e\n" + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.scrnExpsYn : a, "\x3d\x3d", "Y", {
			name: "xif",
			hash: {},
			fn: b.program(2, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, e && e.key, "\x3d\x3d", 0, {
			name: "xif",
			hash: {},
			fn: b.program(4, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d =
			(c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrTpCd : a, "\x3d\x3d", "01", {
				name: "xif",
				hash: {},
				fn: b.program(6, e, 0),
				inverse: b.noop,
				data: e
			})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrTpCd : a, "\x3d\x3d", "02", {
			name: "xif",
			hash: {},
			fn: b.program(9, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrTpCd : a, "\x3d\x3d", "03", {
			name: "xif",
			hash: {},
			fn: b.program(12, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrTpCd :
			a, "\x3d\x3d", "04", {
				name: "xif",
				hash: {},
				fn: b.program(19, e, 0),
				inverse: b.noop,
				data: e
			})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrTpCd : a, "\x3d\x3d", "05", {
			name: "xif",
			hash: {},
			fn: b.program(25, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + "\n\t\n\t\t\x3c/div\x3e\n\x3c/div\x3e\n"
	},
	2: function (b, a, c, f, e) {
		return '\t\t\x3cp class\x3d"s_title"\x3e' + b.escapeExpression(b.lambda(null != a ? a.disrCompNm : a, a)) + "\x3c/p\x3e\n"
	},
	4: function (b, a, c, f, e) {
		return "\t\t\x3cspan class\x3d\"qustMaxRspsCnt\" style\x3d'display: none;'\x3e" +
			b.escapeExpression(b.lambda(null != a ? a.qustMaxRspsCnt : a, a)) + "\x3c/span\x3e\n"
	},
	6: function (b, a, c, f, e) {
		var d;
		return '\t\t\x3cdiv class\x3d"select_list_items single_pick"\x3e\n\t\t\x3cspan class\x3d"qustMaxRspsCnt" style\x3d\'display: none;\'\x3e' + b.escapeExpression(b.lambda(null != a ? a.qustMaxRspsCnt : a, a)) + "\x3c/span\x3e\n" + (null != (d = c.each.call(null != a ? a : b.nullContext || {}, null != a ? a.dgnsDisrItemList : a, {
			name: "each",
			hash: {},
			fn: b.program(7, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "")
	},
	7: function (b, a, c, f, e) {
		c = b.lambda;
		b = b.escapeExpression;
		return '\t\t\t\x3cbutton type\x3d"button" class\x3d"select_item" id\x3d"' + b(c(null != a ? a.btpDgnsCompId : a, a)) + "_itemSn" + b(c(null != a ? a.disrItemSn : a, a)) + '"\x3e\n\t\t\t\t\x3cspan class\x3d"txt"\x3e' + b(c(null != a ? a.disrItemNm : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"btpDgnsCompId\" style\x3d'display: none;'\x3e" + b(c(null != a ? a.btpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"disrItemSn\" style\x3d'display: none;'\x3e" + b(c(null != a ? a.disrItemSn : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"moveBtpDgnsCompId\" style\x3d'display: none;'\x3e" +
			b(c(null != a ? a.moveBtpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\x3c/button\x3e\n"
	},
	9: function (b, a, c, f, e) {
		var d;
		return '\t\t\x3cdiv class\x3d"select_list_items column' + b.escapeExpression(b.lambda(null != a ? a.btpDgnsDisrCompCd : a, a)) + '"\x3e\n' + (null != (d = c.each.call(null != a ? a : b.nullContext || {}, null != a ? a.dgnsDisrItemList : a, {
			name: "each",
			hash: {},
			fn: b.program(10, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "")
	},
	10: function (b, a, c, f, e) {
		c = b.lambda;
		b = b.escapeExpression;
		return '\t\t\t\x3cbutton type\x3d"button" class\x3d"select_item" id\x3d"' +
			b(c(null != a ? a.btpDgnsCompId : a, a)) + "_itemSn" + b(c(null != a ? a.disrItemSn : a, a)) + '" ap-click-area\x3d"\uc9c4\ub2e8\ub808\uc774\uc5b4" ap-click-name\x3d"\uc120\ud0dd\uc9c0 \uc751\ub2f5"\x3e\n\t\t\t\t\x3cspan class\x3d"txt"\x3e' + b(c(null != a ? a.disrItemNm : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"btpDgnsCompId\" style\x3d'display: none;'\x3e" + b(c(null != a ? a.btpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"disrItemSn\" style\x3d'display: none;'\x3e" + b(c(null != a ? a.disrItemSn : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"moveBtpDgnsCompId\" style\x3d'display: none;'\x3e" +
			b(c(null != a ? a.moveBtpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\x3c/button\x3e\n"
	},
	12: function (b, a, c, f, e) {
		var d;
		f = null != a ? a : b.nullContext || {};
		var g = c.helperMissing;
		return (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrCompCd : a, "\x3d\x3d", "1", {
			name: "xif",
			hash: {},
			fn: b.program(13, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrCompCd : a, "\x3d\x3d", "2", {
			name: "xif",
			hash: {},
			fn: b.program(15, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d = c.each.call(f,
			null != a ? a.dgnsDisrItemList : a, {
				name: "each",
				hash: {},
				fn: b.program(17, e, 0),
				inverse: b.noop,
				data: e
			})) ? d : "")
	},
	13: function (b, a, c, f, e) {
		return '\t\t\t\x3cdiv class\x3d"select_list_items img_pick column1"\x3e\n'
	},
	15: function (b, a, c, f, e) {
		return '\t\t\t\x3cdiv class\x3d"select_list_items img_pick"\x3e\n'
	},
	17: function (b, a, c, f, e) {
		var d;
		f = b.lambda;
		var g = b.escapeExpression;
		return '\t\t\t\x3cbutton type\x3d"button" class\x3d"select_item" id\x3d"' + g(f(null != a ? a.btpDgnsCompId : a, a)) + "_itemSn" + g(f(null != a ? a.disrItemSn : a, a)) +
			'" ap-click-area\x3d"\uc9c4\ub2e8\ub808\uc774\uc5b4" ap-click-name\x3d"\uc120\ud0dd\uc9c0 \uc751\ub2f5"\x3e\n\t\t\t\t\x3cspan class\x3d"img"\x3e\n\t\t\t\t\t\x3c!-- \uc774\ubbf8\uc9c0\uc601\uc5ed --\x3e\n\t\t\t\t\t\x3cimg src\x3d"' + g((d = null != (d = c.disrImgUrl || (null != a ? a.disrImgUrl : a)) ? d : c.helperMissing, "function" === typeof d ? d.call(null != a ? a : b.nullContext || {}, {
				name: "disrImgUrl",
				hash: {},
				data: e
			}) : d)) + '"" /\x3e\n\t\t\t\t\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d"txt"\x3e' + g(f(null != a ? a.disrItemNm : a, a)) +
			"\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"btpDgnsCompId\" style\x3d'display: none;'\x3e" + g(f(null != a ? a.btpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"disrItemSn\" style\x3d'display: none;'\x3e" + g(f(null != a ? a.disrItemSn : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"moveBtpDgnsCompId\" style\x3d'display: none;'\x3e" + g(f(null != a ? a.moveBtpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\x3c/button\x3e\n"
	},
	19: function (b, a, c, f, e) {
		var d;
		f = b.lambda;
		var g = b.escapeExpression;
		return '\t\t\x3cdiv class\x3d"select_list_items column' +
			g(f(null != a ? a.btpDgnsDisrCompCd : a, a)) + ' multi_pick" data-pick\x3d"' + g(f(null != a ? a.qustMaxRspsCnt : a, a)) + '"\x3e\n\t\t\t\x3cspan class\x3d"qustMaxRspsCnt" style\x3d\'display: none;\'\x3e' + g(f(null != a ? a.qustMaxRspsCnt : a, a)) + "\x3c/span\x3e\n" + (null != (d = c.each.call(null != a ? a : b.nullContext || {}, null != a ? a.dgnsDisrItemList : a, {
				name: "each",
				hash: {},
				fn: b.program(20, e, 0),
				inverse: b.noop,
				data: e
			})) ? d : "")
	},
	20: function (b, a, c, f, e) {
		var d;
		f = null != a ? a : b.nullContext || {};
		var g = c.helperMissing,
			k = b.lambda,
			h = b.escapeExpression;
		return (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpFuncTpCd : a, "!\x3d", "10", {
				name: "xif",
				hash: {},
				fn: b.program(21, e, 0),
				inverse: b.noop,
				data: e
			})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpFuncTpCd : a, "\x3d\x3d", "10", {
				name: "xif",
				hash: {},
				fn: b.program(23, e, 0),
				inverse: b.noop,
				data: e
			})) ? d : "") + '\t\t\t\t\x3cspan class\x3d"txt"\x3e' + h(k(null != a ? a.disrItemNm : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"btpDgnsCompId\" style\x3d'display: none;'\x3e" + h(k(null != a ? a.btpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"disrItemSn\" style\x3d'display: none;'\x3e" +
			h(k(null != a ? a.disrItemSn : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"moveBtpDgnsCompId\" style\x3d'display: none;'\x3e" + h(k(null != a ? a.moveBtpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\x3c/button\x3e\n"
	},
	21: function (b, a, c, f, e) {
		c = b.lambda;
		b = b.escapeExpression;
		return '\t\t\t\x3cbutton type\x3d"button" class\x3d"select_item" id\x3d"' + b(c(null != a ? a.btpDgnsCompId : a, a)) + "_itemSn" + b(c(null != a ? a.disrItemSn : a, a)) + '" ap-click-area\x3d"\uc9c4\ub2e8\ub808\uc774\uc5b4" ap-click-name\x3d"\uc120\ud0dd\uc9c0 \uc751\ub2f5"\x3e\n'
	},
	23: function (b, a, c, f, e) {
		c = b.lambda;
		b = b.escapeExpression;
		return '\t\t\t\x3cbutton type\x3d"button" class\x3d"select_item btn_reset" id\x3d"' + b(c(null != a ? a.btpDgnsCompId : a, a)) + "_itemSn" + b(c(null != a ? a.disrItemSn : a, a)) + '" ap-click-area\x3d"\uc9c4\ub2e8\ub808\uc774\uc5b4" ap-click-name\x3d"\uc120\ud0dd\uc9c0 \uc751\ub2f5"\x3e\n'
	},
	25: function (b, a, c, f, e) {
		var d;
		f = null != a ? a : b.nullContext || {};
		var g = c.helperMissing;
		return (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrCompCd : a, "\x3d\x3d", "1", {
			name: "xif",
			hash: {},
			fn: b.program(26, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d = (c.xif || a && a.xif || g).call(f, null != a ? a.btpDgnsDisrCompCd : a, "\x3d\x3d", "2", {
			name: "xif",
			hash: {},
			fn: b.program(28, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + "\t\t\t\x3cspan class\x3d\"qustMaxRspsCnt\" style\x3d'display: none;'\x3e" + b.escapeExpression(b.lambda(null != a ? a.qustMaxRspsCnt : a, a)) + "\x3c/span\x3e\n" + (null != (d = c.each.call(f, null != a ? a.dgnsDisrItemList : a, {
			name: "each",
			hash: {},
			fn: b.program(30, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "")
	},
	26: function (b,
		a, c, f, e) {
		return '\t\t\t\x3cdiv class\x3d"select_list_items img_pick column1 multi_pick" data-pick\x3d"' + b.escapeExpression(b.lambda(null != a ? a.qustMaxRspsCnt : a, a)) + '"\x3e\n'
	},
	28: function (b, a, c, f, e) {
		return '\t\t\t\x3cdiv class\x3d"select_list_items img_pick multi_pick" data-pick\x3d"' + b.escapeExpression(b.lambda(null != a ? a.qustMaxRspsCnt : a, a)) + '"\x3e\n'
	},
	30: function (b, a, c, f, e) {
		var d, g;
		f = null != a ? a : b.nullContext || {};
		var k = c.helperMissing,
			h = b.escapeExpression,
			l = b.lambda;
		return (null != (d = (c.xif || a && a.xif ||
			k).call(f, null != a ? a.btpFuncTpCd : a, "!\x3d", "10", {
			name: "xif",
			hash: {},
			fn: b.program(21, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + (null != (d = (c.xif || a && a.xif || k).call(f, null != a ? a.btpFuncTpCd : a, "\x3d\x3d", "10", {
			name: "xif",
			hash: {},
			fn: b.program(23, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + '\t\t\t\t\x3cspan class\x3d"img"\x3e\n\t\t\t\t\t\x3c!-- \uc774\ubbf8\uc9c0\uc601\uc5ed --\x3e\n\t\t\t\t\t\x3cimg src\x3d"' + h((g = null != (g = c.disrImgUrl || (null != a ? a.disrImgUrl : a)) ? g : k, "function" === typeof g ? g.call(f, {
			name: "disrImgUrl",
			hash: {},
			data: e
		}) : g)) + '"" /\x3e\n\t\t\t\t\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d"txt"\x3e' + h(l(null != a ? a.disrItemNm : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"btpDgnsCompId\" style\x3d'display: none;'\x3e" + h(l(null != a ? a.btpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"disrItemSn\" style\x3d'display: none;'\x3e" + h(l(null != a ? a.disrItemSn : a, a)) + "\x3c/span\x3e\n\t\t\t\t\x3cspan class\x3d\"moveBtpDgnsCompId\" style\x3d'display: none;'\x3e" + h(l(null != a ? a.moveBtpDgnsCompId : a, a)) + "\x3c/span\x3e\n\t\t\t\x3c/button\x3e\n"
	},
	compiler: [7, "\x3e\x3d 4.0.0"],
	main: function (b, a, c, f, e) {
		var d;
		return (null != (d = c.each.call(null != a ? a : b.nullContext || {}, null != a ? a.disrCompList : a, {
			name: "each",
			hash: {},
			fn: b.program(1, e, 0),
			inverse: b.noop,
			data: e
		})) ? d : "") + "\n\x3cscript\x3e\n\tvar questionList \x3d new Array();\n\t\n\t$('.select_list_group').on('click','.select_item',function() {\n\t\tvar $this \x3d $(this),  $parent \x3d $this.parent('.select_list_items'), $wrap \x3d $this.closest('.select_list_group');\n\t\t\n\t\tif($parent.hasClass('multi_pick')) {\n\t\t\t\n\t\t\t//\uc120\ud0dd\uc9c0 \ud074\ub9ad\uc2dc \ube44\ud65c\uc131\ud654\ub41c \ub2e4\uc74c\ubc84\ud2bc \ud65c\uc131\ud654\n\t\t\t//\uc644\ub8cc\ubc84\ud2bc\uc774 \ud45c\ucd9c\ub418\uc5b4 \uc788\ub294 \uc0c1\ud0dc\ub77c\uba74 \uc644\ub8cc\ubc84\ud2bc \ud65c\uc131\ud654\n\t\t\tif($(\"#qustComplte\").css(\"display\") !\x3d \"none\"){\n\t\t\t\t$('#qustComplte').prop(\"disabled\", false);\n\t\t\t}else{\n\t\t\t\t$('#qustNext').prop(\"disabled\", false);\n\t\t\t}\n\t\t\t\n\t\t\tconsole.log('\uc5ec\uae34 multi_pick');\n\t\t\t\n\t\t\tvar _maxPick \x3d Number($parent.attr('data-pick')), _selectNum \x3d Number($this.siblings('.select_item.selected').length), _crntNum \x3d _selectNum+1;\n\n\t\t\t/* 20200525 \ucd08\uae30\ud654 \ubc84\ud2bc \uc120\ud0dd \ud560 \uacbd\uc6b0 \ucd94\uac00 */\n\t\t\tif($this.hasClass('btn_reset')) {\n\t\t\t\t$this.addClass('selected').attr('data-num', 1).append('\x3ci class\x3d\"num\"\x3e1\x3c/i\x3e');\n\t\t\t\t$this.siblings().removeClass('selected').removeAttr('data-num').children('i').remove();\n\t\t\t} else {\n\t\t\t\tif(_maxPick \x3e _selectNum) {\n\t\t\t\t\tif(!$this.hasClass('selected')) {\n\t\t\t\t\t\t$this.addClass('selected').attr('data-num', _crntNum).append('\x3ci class\x3d\"num\"\x3e' + _crntNum + '\x3c/i\x3e');\n\t\t\t\t\t}else {\n\t\t\t\t\t\tvar _thisNum \x3d Number($this.attr('data-num'));\n\t\t\t\t\t\t$this.siblings('.select_item.selected').each(function () {\n\t\t\t\t\t\t\tvar _siblingsNum \x3d Number($(this).attr('data-num'));\n\t\t\t\t\t\t\tif(_thisNum \x3c _siblingsNum) {\n\t\t\t\t\t\t\t\t$(this).attr('data-num', _siblingsNum -1).children('i').text(_siblingsNum -1);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\t$this.removeClass('selected').removeAttr('data-num').children('i').remove();\n\t\t\t\t\t};\n\n\t\t\t\t} else {\n\t\t\t\t\tif(!$this.hasClass('selected')) {\n\t\t\t\t\t\t$this.siblings('.select_item.selected').each(function () {\n\t\t\t\t\t\t\tvar _siblingsNum \x3d Number($(this).attr('data-num'));\n\t\t\t\t\t\t\tif(_siblingsNum \x3d\x3d 1) {\n\t\t\t\t\t\t\t\t$(this).removeClass('selected').removeAttr('data-num').children('i').remove();\n\t\t\t\t\t\t\t}else {\n\t\t\t\t\t\t\t\t$(this).attr('data-num', _siblingsNum -1).children('i').text(_siblingsNum -1);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\t$this.addClass('selected').attr('data-num', _selectNum).append('\x3ci class\x3d\"num\"\x3e' + _selectNum + '\x3c/i\x3e');\n\t\t\t\t\t}else {\n\t\t\t\t\t\tvar _thisNum \x3d Number($this.attr('data-num'));\n\t\t\t\t\t\t$this.siblings('.select_item.selected').each(function () {\n\t\t\t\t\t\t\tvar _siblingsNum \x3d Number($(this).attr('data-num'));\n\t\t\t\t\t\t\tif(_thisNum \x3c _siblingsNum) {\n\t\t\t\t\t\t\t\t$(this).attr('data-num', _siblingsNum -1).children('i').text(_siblingsNum -1);\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t});\n\t\t\t\t\t\t$this.removeClass('selected').removeAttr('data-num').children('i').remove();\n\t\t\t\t\t};\n\t\t\t\t};\n\n\t\t\t}\n\t\t\t\n\t\t\t//\uba40\ud2f0 \uc120\ud0dd\uc9c0 \ud56d\ubaa9 \uc800\uc7a5\n\t\t\tvar dataInfo \x3d new Object();\n\t\t\tvar moveCnt \x3d AP.common.getLocalStorage('moveCnt');\n\t\t\t//\ud574\ub2f9\uc120\ud0dd\uc9c0\uc5d0 \ucd5c\ub300 \uc120\ud0dd\uac2f\uc218\n\t\t\tvar choiceLen \x3d parseInt( $parent.children('.qustMaxRspsCnt').text() );\n\t\t\t//\uc5ec\ub7ec \uc120\ud0dd\uc9c0\uac00 \uc787\ub294\uacbd\uc6b0 \uccab\ubc88\uc9f8 \uc120\ud0dd\uc9c0\uc758 \uc120\ud0dd\uac2f\uc218\n\t\t\tvar firstLen \x3d parseInt( $(\".select_list_group \x3e .qustMaxRspsCnt\").text() );\n\t\t\t//\ub2e4\uc74c\ud398\uc774\uc9c0\uc5d0\uc11c \ub2e4\uc2dc \ub3cc\uc544\uc653\uc744 \ub54c \uae30\uc874\uc5d0 \uc800\uc7a5\ub418\uc5b4\uc788\ub294 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\n\t\t\tvar befMtData \x3d AP.common.getLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1));\n\t\t\t\n\t\t\t//\uc120\ud0dd\uc9c0\uc21c\ubc88\n\t\t\tdataInfo.disrItemSn \x3d $(this).children('.disrItemSn').text();\n\t\t\t//\uc120\ud0dd\uc9c0 \ubdf0\ud2f0\ud14c\ud06c\uc9c4\ub2e8\uad6c\uc131ID\n\t\t\tdataInfo.btpDgnsCompId \x3d $(this).children('.btpDgnsCompId').text();\n\t\t\t\n\t\t\tfor(var i\x3d0; i\x3c$('.select_list_items').length; i++){\n\t\t\t\n\t\t\t\t//\ucd5c\ucd08\uc120\ud0dd\uc77c\ub54c\n\t\t\t\tif(befMtData \x3d\x3d null){\n\t\t\t\t\t\n\t\t\t\t\tif(questionList.length \x3d\x3d choiceLen){\n\t\t\t\t\n\t\t\t\t\t\t//\ucd08\uae30\ud654 \uc18d\uc131\uc744 \uac00\uc9c4 \uc120\ud0dd\uc9c0\uc77c \uacbd\uc6b0\ub77c\uba74 \uc790\uc2e0\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \uc120\ud0dd\uc9c0 \uc9c0\uc6c0\n\t\t\t\t\t\tif( $(this).hasClass(\"btn_reset\")  \x3d\x3d true ){\n\t\t\t\t\t\t\tquestionList.splice(0, choiceLen);\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tquestionList.splice(0,1);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tquestionList.push(dataInfo);\n\t\t\t\t\t\t\n\t\t\t\t\t}else{\n\t\t\t\t\t\tquestionList.push(dataInfo);\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), questionList);\n\t\t\t\t\t\n\t\t\t\t\ti \x3d $('.select_list_items').length;\n\t\t\t\t}else{\n\t\t\t\t\t//\uc7ac\uc120\ud0dd\n\t\t\t\t\t//\ud55c\ud398\uc774\uc9c0\uc5d0 \ud558\ub098\uc758 \uc9c8\ubb38\ubc16\uc5d0 \uc5c5\ub2e4\uba74\n\t\t\t\t\tif( $('.select_list_items').length \x3d\x3d 1){\n\t\t\t\t\t\t//\ub2e4\uc2dc \ud604\uc7ac\ud398\uc774\uc9c0\ub85c \ub3cc\uc544\uc640 \uae30\uc874\uc120\ud0dd\uac12\uc5d0\uc11c \ubcc0\uacbd\ub420\ub54c\n\t\t\t\t\t\tif(befMtData.length \x3d\x3d choiceLen){\n\t\t\t\t\t\t\t//\ucd08\uae30\ud654 \uc18d\uc131\uc744 \uac00\uc9c4 \uc120\ud0dd\uc9c0\uc77c \uacbd\uc6b0\ub77c\uba74 \uc790\uc2e0\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \uc120\ud0dd\uc9c0 \uc9c0\uc6c0\n\t\t\t\t\t\t\tif( $(this).hasClass(\"btn_reset\")  \x3d\x3d true ){\n\t\t\t\t\t\t\t\tbefMtData.splice(0, choiceLen);\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t//\uc544\ub2c8\ub77c\uba74 \uc778\ub371\uc2a4 \uc9c0\uc6b0\uace0 \uc0c8\ub85c\uc6b4 \uc120\ud0dd\uc9c0 push\n\t\t\t\t\t\t\t\tbefMtData.splice(0,1);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tbefMtData.push(dataInfo);\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tbefMtData.push(dataInfo);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), befMtData);\n\t\t\t\t\t\t\n\t\t\t\t\t//\uc5ec\ub7ec\uac1c\uc758 \uc9c8\ubb38\uc911\uc758 \ud558\ub098\ub77c\uba74\t\n\t\t\t\t\t}else{\n\t\t\t\t\t\t//\uc9c8\ubb38 ID\uac00 \ub2e4\ub974\ub2e4\uba74\n\t\t\t\t\t\tif(befMtData[0].btpDgnsCompId !\x3d $(this).children('.btpDgnsCompId').text()){\n\t\t\t\t\t\t\tif(befMtData.length \x3d\x3d firstLen+choiceLen){\n\t\t\t\t\t\t\t\t//\ucd08\uae30\ud654 \uc18d\uc131\uc744 \uac00\uc9c4 \uc120\ud0dd\uc9c0\uc77c \uacbd\uc6b0\ub77c\uba74 \uc790\uc2e0\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \uc120\ud0dd\uc9c0 \uc9c0\uc6c0\n\t\t\t\t\t\t\t\tif( $(this).hasClass(\"btn_reset\")  \x3d\x3d true ){\n\t\t\t\t\t\t\t\t\tbefMtData.splice(0, choiceLen);\n\t\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t\t//\uc544\ub2c8\ub77c\uba74 \uc778\ub371\uc2a4 \uc9c0\uc6b0\uace0 \uc0c8\ub85c\uc6b4 \uc120\ud0dd\uc9c0 push\n\t\t\t\t\t\t\t\t\tbefMtData.splice(firstLen,1);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tbefMtData.push(dataInfo);\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\tbefMtData.push(dataInfo);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\ti \x3d $('.select_list_items').length;\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tif(befMtData.length \x3d\x3d choiceLen){\n\t\t\t\t\t\t\t\t//\ucd08\uae30\ud654 \uc18d\uc131\uc744 \uac00\uc9c4 \uc120\ud0dd\uc9c0\uc77c \uacbd\uc6b0\ub77c\uba74 \uc790\uc2e0\uc744 \uc81c\uc678\ud55c \ubaa8\ub4e0 \uc120\ud0dd\uc9c0 \uc9c0\uc6c0\n\t\t\t\t\t\t\t\tif( $(this).hasClass(\"btn_reset\")  \x3d\x3d true ){\n\t\t\t\t\t\t\t\t\tbefMtData.splice(0, choiceLen);\n\t\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t\t//\uc544\ub2c8\ub77c\uba74 \uc778\ub371\uc2a4 \uc9c0\uc6b0\uace0 \uc0c8\ub85c\uc6b4 \uc120\ud0dd\uc9c0 push\n\t\t\t\t\t\t\t\t\tbefMtData.splice(i,1);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tbefMtData.push(dataInfo);\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\tbefMtData.push(dataInfo);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), befMtData);\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t//\uc751\ub2f5\uac12\uc911 'moveBtpDgnsCompId' \uac12\uc774 \uc788\ub294\uacbd\uc6b0 \ud574\ub2f9 \uc9c8\ubb38 key \ub2f4\uace0 '\ub2e4\uc74c' \ubc84\ud2bc \ud074\ub9ad\uc2dc \ub2f4\uae34 key\uac12 \uc6b0\uc120\uc73c\ub85c\n\t\t\tif( $(this).children('.moveBtpDgnsCompId').text() !\x3d \"\" ){\n\t\t\t\tconsole.log('moveBtpDgnsCompId \x3d '+AP.common.getLocalStorage('moveBtpDgnsCompId'));\n\t\t\t\t//\uae30\uc874\uc5d0 \uac12\uc774 \uc788\ub2e4\uba74 \uc9c0\uc6b0\uace0 \uc0c8\ub85c \ub2f4\uae30\n\t\t\t\tif( AP.common.getLocalStorage('moveBtpDgnsCompId') !\x3d null ){\n\t\t\t\t\tAP.common.clearLocalStorage('moveBtpDgnsCompId');\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tAP.common.setLocalStorage('moveBtpDgnsCompId', $(this).children('.moveBtpDgnsCompId').text());\n\t\t\t\tconsole.log('moveBtpDgnsCompId \x3d '+AP.common.getLocalStorage('moveBtpDgnsCompId'));\n\t\t\t\t\n\t\t\t\t//newQuestionList( $(this).children('.moveBtpDgnsCompId').text() );\n\t\t\t\t\n\t\t\t\t//\ub9c8\uc9c0\ub9c9 \uc9c8\ubb38\ub2e8\uacc4\uc5d0\uc120 \ub2e4\uc74c\ubc84\ud2bc \uc228\uae30\uace0 \uc644\ub8cc\ubc84\ud2bc \ud45c\ucd9c\ud558\ub294\ub370 \uc120\ud0dd\uc9c0\uc5d0 \uc9c8\ubb38 key\uac00 \uc788\ub294\uacbd\uc6b0 \n\t\t\t\t//\uc644\ub8cc\ubc84\ud2bc \uc228\uae30\uace0 \ub2e4\uc74c\ubc84\ud2bc \ud45c\ucd9c qustNext qustComplte\n\t\t\t\tif($(\"#qustComplte\").css(\"display\") !\x3d \"none\"){\n\t\t\t\t \t$(\"#qustComplte\").hide();\n\t\t\t\t    $(\"#qustNext\").show();\n\t\t\t\t}\n\t\t\t\t\n\t\t\t}else{\n\t\t\t\tAP.common.clearLocalStorage('moveBtpDgnsCompId');\n\t\t\t}\t\n\t\t\t\n\t\t\t\n\t\t}else {\n\t\t\tif(!$this.hasClass('selected')){\n\t\t\t\t$this.addClass('selected').siblings().removeClass('selected');\n\t\t\t\t\n\t\t\t\t//\uc120\ud0dd\uc9c0 \ud074\ub9ad\uc2dc \ube44\ud65c\uc131\ud654\ub41c \ub2e4\uc74c\ubc84\ud2bc \ud65c\uc131\ud654\n\t\t\t\t//\uc644\ub8cc\ubc84\ud2bc\uc774 \ud45c\ucd9c\ub418\uc5b4 \uc788\ub294 \uc0c1\ud0dc\ub77c\uba74 \uc644\ub8cc\ubc84\ud2bc \ud65c\uc131\ud654\n\t\t\t\tif($(\"#qustComplte\").css(\"display\") !\x3d \"none\"){\n\t\t\t\t\t$('#qustComplte').prop(\"disabled\", false);\n\t\t\t\t}else{\n\t\t\t\t\t$('#qustNext').prop(\"disabled\", false);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tvar dataInfo \x3d new Object();\n\t\t\t\tvar moveCnt \x3d AP.common.getLocalStorage('moveCnt');\n\t\t\t\tvar data \x3d AP.common.getLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1));\n\t\t\t\t//\ub2e4\uc74c\ud398\uc774\uc9c0\uc5d0\uc11c \ub2e4\uc2dc \ub3cc\uc544\uc653\uc744 \ub54c \uae30\uc874\uc5d0 \uc800\uc7a5\ub418\uc5b4\uc788\ub294 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\n\t\t\t\tvar befData \x3d AP.common.getLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1));\n\t\t\t\t\n\t\t\t\t//\uc120\ud0dd\uc9c0\uc21c\ubc88\n\t\t\t\tdataInfo.disrItemSn \x3d $(this).children('.disrItemSn').text();\n\t\t\t\t//\uc120\ud0dd\uc9c0 \ubdf0\ud2f0\ud14c\ud06c\uc9c4\ub2e8\uad6c\uc131ID\n\t\t\t\tdataInfo.btpDgnsCompId \x3d $(this).children('.btpDgnsCompId').text();\n\t\t\t\t\n\t\t\t\tfor(var i\x3d0; i\x3c$('.select_list_items').length; i++){\n\t\t\t\t\tif(data \x3d\x3d null){\n\t\t\t\t\t\t//\ucd5c\ucd08\uc120\ud0dd\n\t\t\t\t\t\tquestionList.push(dataInfo);\n\t\t\t\t\t\t\n\t\t\t\t\t\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), questionList);\n\t\t\t\t\t\t\n\t\t\t\t\t\ti \x3d $('.select_list_items').length;\n\t\t\t\t\t\n\t\t\t\t\t}else{\n\t\t\t\t\t\t//\uc7ac\uc120\ud0dd\n\t\t\t\t\t\t//\uc120\ud0dd\uc9c0 \uac19\uc740 \uacbd\uc6b0 btpDgnsCompId\ub294 \ub3d9\uc77c\ud558\uace0 disrItemSn\ub9cc \ub2e4\ub984\n\t\t\t\t\t\tif(data[i].btpDgnsCompId \x3d\x3d $(this).children('.btpDgnsCompId').text()){\n\t\t\t\t\t\t\t//questionList\uac00 \ube44\uc5b4 \uc788\ub2e4\uba74 \uc55e\uc120\ud398\uc774\uc9c0\uc5d0\uc11c \ub2e4\uc2dc \ub3cc\uc544\uc628 \ud6c4 \uae30\uc874 \uc120\ud0dd\ub41c \uac12\uc5d0\uc11c \ubcc0\uacbd\ucc98\ub9ac\n\t\t\t\t\t\t\t//questionList\ub294 \ucd08\uae30 \uc120\ud0dd\uc5d0 \ub300\ud55c \ucc98\ub9ac\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t//if(questionList.length !\x3d 0){\n\t\t\t\t\t\t\t//\tquestionList.splice(i,1,dataInfo);\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t//}else{\n\t\t\t\t\t\t\t\tbefData.splice(i,1,dataInfo);\n\t\t\t\t\t\t\t//}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), befData);\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\ti \x3d $('.select_list_items').length;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t//\ub2e4\uc74c \uc120\ud0dd\uc9c0\uc5d0 \ub300\ud55c \uc120\ud0dd\uac12 \ucd5c\ucd08\uc120\ud0dd\n\t\t\t\t\t\t\tif(data[i+1] \x3d\x3d null \x26\x26 data[i].btpDgnsCompId !\x3d $(this).children('.btpDgnsCompId').text()){\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//questionList.push(dataInfo);\n\t\t\t\t\t\t\t\tbefData.push(dataInfo);\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), befData);\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\ti \x3d $('.select_list_items').length;\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t//\ub2e4\uc74c \uc120\ud0dd\uc9c0\uc5d0 \ub300\ud55c \uc120\ud0dd\uac12 \uc7ac\uc120\ud0dd\n\t\t\t\t\t\t\t\tif(data[i+1].btpDgnsCompId \x3d\x3d $(this).children('.btpDgnsCompId').text()){\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t//questionList\uac00 \ube44\uc5b4 \uc788\ub2e4\uba74 \uc55e\uc120\ud398\uc774\uc9c0\uc5d0\uc11c \ub2e4\uc2dc \ub3cc\uc544\uc628 \ud6c4 \uae30\uc874 \uc120\ud0dd\ub41c \uac12\uc5d0\uc11c \ubcc0\uacbd\ucc98\ub9ac\n\t\t\t\t\t\t\t\t\t//questionList\ub294 \ucd08\uae30 \uc120\ud0dd\uc5d0 \ub300\ud55c \ucc98\ub9ac\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t//if(questionList.length !\x3d 0){\n\t\t\t\t\t\t\t\t\t//\tquestionList.splice(i+1,1,dataInfo);\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t//}else{\n\t\t\t\t\t\t\t\t\t\tbefData.splice(i+1,1,dataInfo);\n\t\t\t\t\t\t\t\t\t//}\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), befData);\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\ti \x3d $('.select_list_items').length;\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t\t \n\t\t\t\t\t}// LocalStorage \x3d\x3d null else end\n\t\t\t\t}//for end\n\t\t\t\t\n\t\t\t\t//if(questionList.length !\x3d 0){\n\t\t\t\t//\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), questionList);\t\t\t\t\n\t\t\t\t//}else{\n\t\t\t\t//\tAP.common.setLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1), befData);\n\t\t\t\t//}\n\t\t\t\t\n\t\t\t\tconsole.log('asd \x3d '+AP.common.getLocalStorage('dgnsDisrItem'+parseInt(moveCnt-1)));\n\t\t\t\t\n\t\t\t\t//\uc751\ub2f5\uac12\uc911 'moveBtpDgnsCompId' \uac12\uc774 \uc788\ub294\uacbd\uc6b0 \ud574\ub2f9 \uc9c8\ubb38 key \ub2f4\uace0 '\ub2e4\uc74c' \ubc84\ud2bc \ud074\ub9ad\uc2dc \ub2f4\uae34 key\uac12 \uc6b0\uc120\uc73c\ub85c\n\t\t\t\tif( $(this).children('.moveBtpDgnsCompId').text() !\x3d \"\" ){\n\t\t\t\t\tconsole.log('moveBtpDgnsCompId \x3d '+AP.common.getLocalStorage('moveBtpDgnsCompId'));\n\t\t\t\t\t//\uae30\uc874\uc5d0 \uac12\uc774 \uc788\ub2e4\uba74 \uc9c0\uc6b0\uace0 \uc0c8\ub85c \ub2f4\uae30\n\t\t\t\t\tif( AP.common.getLocalStorage('moveBtpDgnsCompId') !\x3d null ){\n\t\t\t\t\t\tAP.common.clearLocalStorage('moveBtpDgnsCompId');\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tAP.common.setLocalStorage('moveBtpDgnsCompId', $(this).children('.moveBtpDgnsCompId').text());\n\t\t\t\t\tconsole.log('moveBtpDgnsCompId \x3d '+AP.common.getLocalStorage('moveBtpDgnsCompId'));\n\t\t\t\t\t\n\t\t\t\t\t//newQuestionList( $(this).children('.moveBtpDgnsCompId').text() );\n\t\t\t\t\t\n\t\t\t\t\t//\ub9c8\uc9c0\ub9c9 \uc9c8\ubb38\ub2e8\uacc4\uc5d0\uc120 \ub2e4\uc74c\ubc84\ud2bc \uc228\uae30\uace0 \uc644\ub8cc\ubc84\ud2bc \ud45c\ucd9c\ud558\ub294\ub370 \uc120\ud0dd\uc9c0\uc5d0 \uc9c8\ubb38 key\uac00 \uc788\ub294\uacbd\uc6b0 \n\t\t\t\t\t//\uc644\ub8cc\ubc84\ud2bc \uc228\uae30\uace0 \ub2e4\uc74c\ubc84\ud2bc \ud45c\ucd9c qustNext qustComplte\n\t\t\t\t\tif($(\"#qustComplte\").css(\"display\") !\x3d \"none\"){\n\t\t\t\t\t \t$(\"#qustComplte\").hide();\n\t\t\t\t\t    $(\"#qustNext\").show();\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t}else{\n\t\t\t\t\tAP.common.clearLocalStorage('moveBtpDgnsCompId');\n\t\t\t\t}\t\n\t\t\t\t\t\t\n\t\t\t}// !$this.hasClass('selected') if end \n\t\t\t\n\t\t\t\t\t\t\n\t\t};//multi pick else end\n\t\t\n\t\t//\uc120\ud0dd\uc9c0\ubcc4 \ucd5c\uc18c \ud558\ub098\uc758 \uc120\ud0dd\uac12\uc774 \uc5c6\ub294 \uacbd\uc6b0 '\ub2e4\uc74c' \ubc84\ud2bc \ube44\ud65c\uc131\ud654\n\t\tfor(var i\x3d0; i\x3c$('.select_list_items').length; i++){\n\t\t\tvar items \x3d $('.select_list_items');\n\t\t\t\n\t\t\tif(items[i].getElementsByClassName('selected').length \x3d\x3d 0){\n\t\t\t\t\n\t\t\t\tif($(\"#qustComplte\").css(\"display\") !\x3d \"none\"){\n\t\t\t\t\t$('#qustComplte').prop(\"disabled\", true);\n\t\t\t\t}else{\n\t\t\t\t\t$('#qustNext').prop(\"disabled\", true);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t\n\t});//select_list_group click func end\n\x3c/script\x3e"
	},
	useData: !0
});
this.AP = this.AP || {};
this.AP.handlebars = this.AP.handlebars || {};
this.AP.handlebars.display = this.AP.handlebars.display || {};
this.AP.handlebars.display.skinfinder = this.AP.handlebars.display.skinfinder || {};
this.AP.handlebars.display.skinfinder["term-agree-yn"] = Handlebars.template({
	compiler: [7, "\x3e\x3d 4.0.0"],
	main: function (b, a, c, f, e) {
		var d;
		c = b.lambda;
		b = b.escapeExpression;
		return '\x3cdiv class\x3d"layer_popup fullpage btn_y"\x3e\n\t\t\x3cdiv class\x3d"layer_wrap"\x3e \n\t\t\t\x3cdl class\x3d"layer"\x3e\n\t\t\t\t\x3cdt class\x3d"layer_title"\x3e\ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \ud53c\ubd80\uc9c4\ub2e8\x3c/dt\x3e\n\t\t\t\t\x3cdd class\x3d"layer_cont"\x3e\n\t\t\t\t\t\x3cdiv class\x3d"section term_beauty_concierge"\x3e\n                        \x3cp class\x3d"heading"\x3e' + b(c(null !=
			(d = null != a ? a.data : a) ? d.tncTtl : d, a)) + "\x3c/p\x3e\n                        \x3cp id\x3d\"btpTncNo\" style\x3d'display: none;'\x3e" + b(c(null != (d = null != a ? a.data : a) ? d.btpTncNo : d, a)) + '\x3c/p\x3e\n                        \x3cdiv class\x3d"con_body"\x3e\n                        \x3c/div\x3e\n                    \x3c/div\x3e\n                     \n                    \x3cdiv class\x3d"bottom-btn-group equal-btn-group"\x3e\x3c!-- 20200421 \ud074\ub798\uc2a4 \ubcc0\uacbd --\x3e\n\t\t\t\t\t\t\x3cbutton type\x3d"button" class\x3d"btn-core btn-large btn-graylight-line" ap-click-area\x3d"\uc9c4\ub2e8\ub808\uc774\uc5b4" ap-click-name\x3d"\ub3d9\uc758 \uc548 \ud568"\x3e\ub3d9\uc758\ud558\uc9c0 \uc54a\uc74c\x3c/button\x3e\n\t\t\t\t\t\t\x3cbutton type\x3d"button" class\x3d"btn-core btn-large btn-black" ap-click-area\x3d"\uc9c4\ub2e8\ub808\uc774\uc5b4" ap-click-name\x3d"\ub3d9\uc758 \ud568"\x3e\ub3d9\uc758\x3c/button\x3e\n                    \x3c/div\x3e\n\t\t\t\t\x3c/dd\x3e\n\t\t\t\x3c/dl\x3e\n\t\t\t\x3cbutton class\x3d"layer_close" type\x3d"button"\x3e\x3ci class\x3d"ficon ficon-close-30"\x3e\x3c/i\x3e\x3cspan class\x3d"sr_only"\x3e\ub808\uc774\uc5b4 \ub2eb\uae30\x3c/span\x3e\x3c/button\x3e\n\t\t\x3c/div\x3e\n\t\x3c/div\x3e \n\x3c/div\x3e\n\n\x3cscript\x3e \n\t//\uc57d\uad00\ub3d9\uc758\uc5ec\ubd80\n\tvar agreeYn;\n\t//\uc57d\uad00\uc81c\ubaa9\n\tvar agreeHead;\n\t//\uc57d\uad00\ub0b4\uc6a9\n\tvar agreeContents;\n\t//\ubdf0\ud2f0\ud14c\ud06c \uc57d\uad00\ubc88\ud638\n\tvar btpTncNo \x3d $(\'#btpTncNo\').text();\n\t\n\t//\uc57d\uad00 \ub3d9\uc758\uc2dc \uc57d\uad00\ub3d9\uc758 \uc77c\uc2dc\uc640 \ubdf0\ud2f0\ud14c\ud06c \uc57d\uad00\ubc88\ud638 \uc804\ub2ec\n\t//\uc57d\uad00 \ubbf8\ub3d9\uc758\uc2dc \ubdf0\ud2f0\ud14c\ud06c \uc57d\uad00\ubc88\ud638\uc640 \uc57d\uad00\uc81c\ubaa9, \uc57d\uad00\ub0b4\uc6a9 \uc804\ub2ec\n\t\n\t//\ubbf8\ub3d9\uc758\n\t$(\'.btn-gray\').on(\'click\',function() {\n\t\t\n\t\tagreeYn \x3d "N";\n\t\tagreeHead \x3d $(\'.term_beauty_concierge\').children(\'.heading\').text();\n\t\tagreeContents \x3d $(\'.con_body\').children(\'p\').first().text();\n\t\t\n\t\t//saveTermAgreeYn(agreeYn, agreeHead, agreeContents);\n\t\t//\ubbf8\ub3d9\uc758\uc2dc \ub3d9\uc758\uc5ec\ubd80\uc800\uc7a5\ud558\uc9c0 \uc54a\uace0 \ud31d\uc5c5\ucc3d\ub9cc \ub2eb\uae30\n\t\tAP.modal.closeAll(null, \'close\');\n\t\t\n\t\t\n\t});\n\t\n\t//\ub3d9\uc758\n\t$(\'.btn-black\').on(\'click\',function() {\n\t\t\n\t\tagreeYn \x3d "Y";\n\t\t\n\t\tsaveTermAgreeYn(agreeYn, "", "");\n\t\t\n\t});\n\t\n\t//\uc57d\uad00 \ub3d9\uc758\uc5ec\ubd80 \uc800\uc7a5 API \uc694\uccad \ud568\uc218\n\tfunction saveTermAgreeYn(agreeYn, head, contents){\n\t\t\n\t\t//\uc57d\uad00 \ub3d9\uc758\uc5ec\ubd80 \uc800\uc7a5 API\n\t\tAP.api.saveTermAgreeYn(null, {agreeYn : agreeYn, agreeHead : head, agreeContents : contents, btpTncNo : btpTncNo}).done(function(result){\n\t\t\t\t\n\t\t\tif(agreeYn \x3d\x3d \'Y\'){\n\t\t\t\tAP.skinFinder.getQuestionList();\n\t\t\t}else{\n\t\t\t\tAP.modal.closeAll(null, \'close\');\n\t\t\t}\n\t\t\t\n\t\t}).fail(function(e) {\n\t\t\t//\uc2e4\ud328\n\t\t\tAP.modal.alert(e.errorMessage);\n\t\t});\n\t\t\n\t}\n\t\n\x3c/script\x3e'
	},
	useData: !0
});
this.AP = this.AP || {};
this.AP.handlebars = this.AP.handlebars || {};
this.AP.handlebars.display = this.AP.handlebars.display || {};
this.AP.handlebars.display.skinfinder = this.AP.handlebars.display.skinfinder || {};
this.AP.handlebars.display.skinfinder["jindan-start-loading"] = Handlebars.template({
	compiler: [7, "\x3e\x3d 4.0.0"],
	main: function (b, a, c, f, e) {
		return '\x3cdiv class\x3d"layer_popup fullpage"\x3e\n\t\x3cdiv class\x3d"layer_wrap"\x3e \n\t\t\x3cdl class\x3d"layer"\x3e\n\t\t\t\x3cdt class\x3d"layer_title"\x3e\ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \ud53c\ubd80\uc9c4\ub2e8\x3c/dt\x3e\n\t\t\t\x3cdd class\x3d"layer_cont"\x3e\n\t\t\t\t\x3cdiv class\x3d"loading_result"\x3e\n                    \x3cp class\x3d"txt"\x3e\uc544\ubaa8\ub808 \ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \x3cbr\x3e\ud53c\ubd80\uc9c4\ub2e8\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4\x3c/p\x3e\n                    \x3cdiv class\x3d"img_loading-1"\x3e\n                        \x3c!-- \x3cspan class\x3d"spin_img"\x3e\x3c/span\x3e 20200421 \uc0ad\uc81c --\x3e\n                    \x3c/div\x3e\n                    \x3csmall class\x3d"txt"\x3e\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694\x3c/small\x3e\n                \x3c/div\x3e\n\t\t\t\x3c/dd\x3e\n\t\t\x3c/dl\x3e\n\t\t\x3cbutton class\x3d"layer_close" type\x3d"button"\x3e\x3ci class\x3d"ficon ficon-close-30"\x3e\x3c/i\x3e\x3cspan class\x3d"sr_only"\x3e\ub808\uc774\uc5b4 \ub2eb\uae30\x3c/span\x3e\x3c/button\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n\n\x3c!--/* \ud558\ub2e8 js\ub4f1\uc744 \uc2e4\ud589\ud558\ub294 \ub9c8\uc9c0\ub9c9 \uc601\uc5ed */--\x3e\n\x3cth:block ap:fragment\x3d"layout-endpoint"\x3e\n\t\x3cscript\x3e \n\n\t\tanimation (\'[class*\x3dimg_loading-]\', 12, 100); // 20200421 \uc218\uc815\n\t\t\n\t\x3c/script\x3e\n\x3c/th:block\x3e'
	},
	useData: !0
});
(function (b) {
	function a(a) {
		var b = "",
			c = encodeURIComponent(e.href + "\x26param\x3dfacebook");
		switch (a) {
			case "facebook":
				b = "//www.facebook.com/sharer/sharer.php?u\x3d" + c;
				break;
			case "kakaotalk":
				AP.common.kakaoApiReady.done(function () {
					console.log("Origin.image \x3d " + e.image);
					Kakao.Link.sendDefault({
						objectType: "feed",
						installTalk: !0,
						content: {
							title: e.title,
							description: e.description,
							imageUrl: e.image,
							link: {
								mobileWebUrl: e.href,
								webUrl: e.href
							}
						},
						buttons: [{
							title: "\uc9c4\ub2e8\ud558\ub7ec \uac00\uae30",
							link: {
								mobileWebUrl: e.href,
								webUrl: e.href
							}
						}]
					})
				})
		}
		if ("kakaotalk" !== a) {
			var f = window.open(e.protocol + b, a + "sns_share", "scrollbars\x3d1,width\x3d500,height\x3d500,menubar\x3d0,resizable\x3d0");
			/device=android/i.test(navigator.userAgent) && "facebook" == a && setTimeout(function () {
				f.close()
			}, 1E3)
		}
	}

	function c() {
		var a;
		AP.api.termAgreeYn(null, {}).done(function (c) {
			"Y" == c.tncAgrYn ? AP.skinFinder.getQuestionList() : (AP.skinFinder.diagnosisOpen("display.skinfinder.term-agree-yn", c, "\ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \uc11c\ube44\uc2a4 \uc774\uc6a9 \ub3d9\uc758"),
				a = c.tncTxt, b(".con_body").html(a))
		}).fail(function (a) {
			AP.modal.alert(a.errorMessage)
		})
	}
	var f = $B.Class.extend({
			getQuestionList: function () {
				localStorage.clear();
				b(".layer_close").click();
				AP.skinFinder.diagnosisOpen("display.skinfinder.jindan-start-loading", "", "\ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \ud53c\ubd80\uc9c4\ub2e8");
				var a, c;
				setTimeout(function () {
					AP.api.diagnosis(null, {}).done(function (e) {
						clearInterval(animationInterval);
						b(".layer_close").click();
						AP.common.setLocalStorage("newBtnDgnsCompId0",
							AP.common.getLocalStorage("ogBtnDgnsCompId"));
						AP.common.setLocalStorage("moveCnt", 1);
						a = AP.skinFinder.diagnosisOpen("display.skinfinder.diagnosis-step", e, "\ubdf0\ud2f0 \ucee8\uc2dc\uc5b4\uc9c0 \ud53c\ubd80\uc9c4\ub2e8");
						c = AP.common.getTemplate("display.skinfinder.diagnosis-jindan-type", e);
						a.getElement().find(".diagnosis_test_wrap").append(c)
					}).fail(function (a) {
						AP.modal.alert(a.errorMessage)
					})
				}, 2E3)
			},
			diagnosisOpen: function (a, b, c) {
				return AP.modal.full({
					title: c,
					contents: {
						templateKey: a,
						templateModel: {
							data: b
						}
					}
				})
			}
		}),
		e = {
			title: b('meta[property\x3d"og:title"]').attr("content"),
			description: b('meta[property\x3d"og:description"]').attr("content"),
			image: b('meta[property\x3d"og:image"]').attr("content"),
			protocol: location.protocol,
			origin: location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""),
			href: location.href
		};
	b("li[name\x3dsns_btn]").on("click", function (d) {
		console.log("aaaaaaa \x3d " + e.href);
		d.preventDefault();
		var c = b(d.currentTarget).data("sns-type");
		if ("url" === c) {
			if (d = b(d.currentTarget), "function" ===
				typeof document.execCommand) {
				c = -1 != location.href.indexOf("access_token") ? location.href.substring(0, location.href.indexOf("access_token") - 1) : location.href;
				c = b('\x3cinput type\x3d"text" id\x3d"copyurl" value\x3d"' + c + '" style\x3d"position:absolute"\x3e');
				d.parent().append(c);
				if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
					var f = document.getElementById("copyurl"),
						h = f.contentEditable,
						l = f.readOnly;
					f.contentEditable = !0;
					f.readOnly = !1;
					var m = document.createRange();
					m.selectNodeContents(f);
					var n = window.getSelection();
					n.removeAllRanges();
					n.addRange(m);
					"TEXTAREA" != f.nodeName && "INPUT" != f.nodeName || f.select();
					f.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i) && f.setSelectionRange(0, 999999);
					f.contentEditable = h;
					f.readOnly = l;
					document.queryCommandSupported("copy") && document.execCommand("copy")
				} else c.select(), document.execCommand("Copy");
				c.remove();
				d.focus();
				alert("URL\uc774 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")
			}
		} else a(c)
	});
	b("#diagnosisStart").on("click", function (a) {
		AP.LOGIN_USER ? c() : AP.login.go()
	});
	b("#lastResult").on("click", function (a) {
		AP.modal.loading();
		console.log("\uc9c4\ub2e8\uc77c\uc2dc \x3d " + b("#lastDttm").text());
		a = b("#lastDttm").text();
		location.href = contextPath + "/display/detailResultList?displayMenuId\x3dskinFinder\x26custDgnsDttm\x3d" + a
	});
	AP.skinFinder = new f
})(jQuery);