odoo.define("website_forum.tour_forum", function (require) {
    "use strict";

    var core = require("web.core");
    var Tour = require("web.Tour");
    var tour = require("web_tour.tour");
    var base = require("web_editor.base");

    var _t = core._t;

    base.ready().done(function () {
        Tour.register({
            id:   'question',
            mode: 'test',
            name: _t("Create a question"),
            steps: [
                {
                    title:     _t("Create a Question!"),
                    content:   _t("Let's go through the first steps to create a new question."),
                    popover:   { next: _t("Start Tutorial"), end: _t("Skip It") },
                },
                {
                    title:     _t("Add Content"),
                    element:   '#oe_main_menu_navbar a[data-action=new_page]',
                    placement: 'bottom',
                    content:   _t("Use this button to create a new forum like any other document (page, menu, products, event, ...)."),
                    popover:   { fixed: true },
                },
                {
                    title:     _t("New Forum"),
                    element:   'a[data-action=new_forum]',
                    placement: 'left',
                    content:   _t("Select this menu item to create a new forum."),
                    popover:   { fixed: true },
                },
                {
                    title:     _t("Forum Name"),
                    element:   '.modal #editor_new_forum input[type=text]',
                    sampleText:'New Forum',
                    placement: 'right',
                    content:   _t("Enter a name for your new forum."),
                },
                {
                    title:     _t("Create Forum"),
                    waitNot:   ".modal #editor_new_forum input[type=text]:propValue('')",
                    element:   '.modal button.btn-primary',
                    placement: 'right',
                    content:   _t("Click <em>Continue</em> to create the forum."),
                },
                {
                    title:     _t("New Forum Created"),
                    waitNot:   '.modal:visible',
                    content:   _t("This page contains all the information related to the new forum."),
                    popover:   { next: _t("Continue") },
                },
                {
                    title:     _t("Ask a Question"),
                    element:   '.btn-block a:first',
                    placement: 'left',
                    content:   _t("Ask the question in this forum by clicking on the button."),
                },
                {
                    title:     _t("Question Title"),
                    element:   'input[name=post_name]',
                    sampleText:'First Question Title',
                    placement: 'top',
                    content:   _t("Give your question title."),
                },
                {
                    title:     _t("Question"),
                    waitNot:   "input[name=post_name]:propValue('')",
                    element:   '.note-editable p',
                    sampleText: 'First Question',
                    placement: 'top',
                    content:   _t("Put your question here."),
                },
                {
                    title:     _t("Give Tag"),
                    waitNot:   '.note-editable p:containsExact("<br>")',
                    element:   '.select2-choices',
                    placement: 'top',
                    content:   _t("Insert tags related to your question."),
                },
                {
                    title:     _t("Post Question"),
                    waitNot:   "input[id=s2id_autogen2]:propValue('Tags')",
                    element:   'button:contains("Post Your Question")',
                    placement: 'bottom',
                    content:   _t("Click to post your question."),
                },
                {
                    title:     _t("New Question Created"),
                    waitFor:   '.fa-star',
                    content:   _t("This page contains the newly created questions."),
                    popover:   { next: _t("Continue") },
                },
                {
                    title:     _t("Answer"),
                    element:   '.note-editable p',
                    sampleText: 'First Answer',
                    placement: 'top',
                    content:   _t("Put your answer here."),
                },
                {
                    title:     _t("Post Answer"),
                    waitNot:   '.note-editable p:containsExact("<br>")',
                    element:   'button:contains("Post Answer")',
                    placement: 'bottom',
                    content:   _t("Click to post your answer."),
                },
                {
                    title:     _t("Answer Posted"),
                    waitFor:   '.fa-check-circle',
                    content:   _t("This page contains the newly created questions and its answers."),
                    popover:   { next: _t("Continue") },
                },
                {
                    title:     _t("Accept Answer"),
                    element:   'a[data-karma="20"]:first',
                    placement: 'right',
                    content:   _t("Click here to accept this answer."),
                },
                {
                    title:     _t("Congratulations"),
                    waitFor:   '.oe_answer_true',
                    content:   _t("Congratulations! You just created and post your first question and answer."),
                    popover:   { next: _t("Close Tutorial") },
                },
            ]
        });

        tour.register("question", {
            url: "/",
        }, [{
            trigger: "a[data-action=new_forum]",
            content: _t("Select this menu item to create a new forum."),
            position: "bottom",
        }, {
            trigger: "#editor_new_forum input[type=text]",
            content: _t("Enter a name for your new forum."),
            position: "right",
        }, {
            trigger: "button.btn-primary",
            extra_trigger: ".modal #editor_new_forum input[type=text]:not(:propValue(\"\"))",
            content: _t("Click <em>Continue</em> to create the forum."),
            position: "right",
        }, {
            trigger: ".btn-block a:first",
            position: "left",
            content: _t("Ask the question in this forum by clicking on the button."),
        }, {
            trigger: "input[name=post_name]",
            position: "top",
            content: _t("Give your question title."),
        }, {
            trigger: ".note-editable p",
            extra_trigger: "input[name=post_name]:not(:propValue(\"\"))",
            content: _t("Put your question here."),
            position: "bottom",
        }, {
            trigger: ".select2-choices",
            extra_trigger: ".note-editable p:not(:containsExact(\"<br>\"))",
            content: _t("Insert tags related to your question."),
            position: "top",
        }, {
            trigger: "button:contains(\"Post Your Question\")",
            extra_trigger: "input[id=s2id_autogen2]:not(:propValue(\"Tags\"))",
            content: _t("Click to post your question."),
            position: "bottom",
        }, {
            trigger: ".note-editable p",
            content: _t("Put your answer here."),
            position: "bottom",
        }, {
            trigger: "button:contains(\"Post Answer\")",
            extra_trigger: ".note-editable p:not(:containsExact(\"<br>\"))",
            content: _t("Click to post your answer."),
            position: "bottom",
        }, {
            trigger: "a[data-karma=\"20\"]:first",
            content: _t("Click here to accept this answer."),
            position: "right",
        }]);
    });
});
