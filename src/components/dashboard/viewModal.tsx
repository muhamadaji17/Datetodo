import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Dialog, DialogContent, Slide } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import DetailTabComponent from "./tabDetaill";
import EditTabComponent from "./tabEdit";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ViewModal = ({ open, handleClose, data, dateOri }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <form action="">
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Detail Todo" {...a11yProps(0)} />
                <Tab label="Update Todo" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <DetailTabComponent dataApi={data} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <EditTabComponent
                dataApi={data}
                dateOri={dateOri}
                handleClose={handleClose}
              />
            </CustomTabPanel>
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ViewModal;
