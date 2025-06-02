import Sidebar from "../components/Sidebar";
import MobileNavbar from "../components/MobileNavbar";
import { cn } from "../utils/clsx";

const About = () => {
  return (
    <div
      className={cn(
        "md:flex min-h-screen max-h-full bg-neutral-950 text-neutral-50"
      )}
    >
      <MobileNavbar />

      <Sidebar />

      <div className="flex flex-col gap-5 px-4 text-zinc-200 py-2">
        <div className="gap-2 flex flex-col">
          <h3 className="font-semibold text-xl">About this sample</h3>

          <p className="font-thin text-sm tracking-wide w-7/12">
            This expense tracker demo application showcases using several
            Essential JS 2 components together in a real-world application
            scenario. You can further explore the source code of this
            application and use it as a reference for integrating Essential JS 2
            components into your applications.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            List of EJ2 components used in this sample
          </h3>

          <div
            style={{ color: "oklch(70.9% 0.105 251.813)" }}
            className="grid grid-cols-4 gap-2 mt-4 text-md font-light"
          >
            <div className="control-item">
              <span className="icon-button e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/button/getting-started/"
                target="_blank"
              >
                Button
              </a>
            </div>
            <div className="control-item">
              <span className="icon-chart e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/chart/getting-started/"
                target="_blank"
              >
                Chart
              </a>
            </div>
            <div className="control-item">
              <span className="icon-checkbox e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/check-box/getting-started/"
                target="_blank"
              >
                CheckBox
              </a>
            </div>
            <div className="control-item">
              <span className="icon-datepicker e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/datepicker/getting-started/"
                target="_blank"
              >
                DatePicker
              </a>
            </div>
            <div className="control-item">
              <span className="icon-daterangepicker e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/daterangepicker/getting-started/"
                target="_blank"
              >
                DateRangePicker
              </a>
            </div>
            <div className="control-item">
              <span className="icon-dialog e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/dialog/getting-started/"
                target="_blank"
              >
                Dialog
              </a>
            </div>
            <div className="control-item">
              <span className="icon-dropdownlist e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/drop-down-list/getting-started/"
                target="_blank"
              >
                DropDownList
              </a>
            </div>
            <div className="control-item">
              <span className="icon-grid e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/grid/getting-started/"
                target="_blank"
              >
                Grid
              </a>
            </div>
            <div className="control-item">
              <span className="icon-multiselect e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/multi-select/getting-started/"
                target="_blank"
              >
                MultiSelect
              </a>
            </div>
            <div className="control-item">
              <span className="icon-numerictextbox e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/numerictextbox/getting-started/"
                target="_blank"
              >
                NumericTextBox
              </a>
            </div>
            <div className="control-item">
              <span className="icon-radiobutton e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/radio-button/getting-started/"
                target="_blank"
              >
                RadioButton
              </a>
            </div>
            <div className="control-item">
              <span className="icon-textboxes e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/textbox/getting-started/"
                target="_blank"
              >
                TextBoxes
              </a>
            </div>
            <div className="control-item">
              <span className="icon-timepicker e-sb-icon control-icon"></span>
              <a
                className="control-name"
                href="http://ej2.syncfusion.com/documentation/timepicker/getting-started/"
                target="_blank"
              >
                TimePicker
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
