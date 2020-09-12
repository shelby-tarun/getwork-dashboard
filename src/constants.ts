import WorkIcon from "@material-ui/icons/Work";

export interface IJobCard {
  Icon: typeof WorkIcon;
  role: string;
  company: string;
  location: string;
  position: string;
  compensation: string;
  growth: string;
  action: string;
  duration: string;
}

export const jobCards: IJobCard[] = [
  {
    Icon: WorkIcon,
    role: "Graphic Designer",
    company: "Tata Consultancy",
    location: "Gurugram",
    position: "Full Time",
    compensation: "$20k - 25k per year",
    growth: "1.5% - 2%",
    action: "Invited You",
    duration: "15 august - 20 august",
  },
  {
    Icon: WorkIcon,
    role: "Software Engineer",
    company: "Tata Consultancy",
    location: "Bangalore",
    position: "Full Time",
    compensation: "$40k - 45k per year",
    growth: "1.5% - 2%",
    action: "Invited You",
    duration: "15 august - 20 august",
  },
  {
    Icon: WorkIcon,
    role: "Business Development Manager",
    company: "Tata Consultancy",
    location: "Pune",
    position: "Full Time",
    compensation: "$30k - 35k per year",
    growth: "1.5% - 2%",
    action: "Invited You",
    duration: "15 august - 20 august",
  },
  {
    Icon: WorkIcon,
    role: "Senior Software Engineer",
    company: "Infosys",
    location: "Bangalore",
    position: "Full Time",
    compensation: "$80k - 85k per year",
    growth: "4.5% - 6%",
    action: "Invited You",
    duration: "15 august - 20 august",
  },
  {
    Icon: WorkIcon,
    role: "QA",
    company: "Tata Consultancy",
    location: "Pune",
    position: "Full Time",
    compensation: "$20k - 25k per year",
    growth: "1.5% - 2%",
    action: "Invited You",
    duration: "15 august - 20 august",
  },
];
