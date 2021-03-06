var virt = require("virt"),
    app = require("../index"),
    Home = require("../components/Home"),
    LayoutApp = require("../components/layouts/LayoutApp");


app.registerPage("home", function renderHomePage(ctx) {
    return (
        virt.createView(LayoutApp, {
            ctx: ctx,
            i18n: app.i18n,
            render: function render() {
                return virt.createView(Home);
            }
        })
    );
});
