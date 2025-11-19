import day2_event1 from '../assets/Confernece.svg';
import day2_event2 from '../assets/POSTER PRESENTATION.svg';
import day2_event3 from '../assets/project_1.svg';
import day2_event4 from '../assets/project_1.svg';
import day2_event5 from '../assets/project_1.svg';
import day2_event6 from '../assets/project_1.svg';

const day2_data = [
    {
        e_no: 1,
        e_title: "The Confluence",
        e_subtitle: "A Multidisciplinary Conclave.",
        e_coordinator: "Dr Neethu Mary Tomy (+91 7592889287), Mrs Cibyna Thomas (+91 8848274816) ",
        e_student_coordinators: [
            { name: "Alex S Mathew", contact: "+91 8714188776" },
            { name: "Sharan R", contact: "+91 8921966427" }
        ],
        e_guidelines: "https://github.com/rhapsodialiteraria/Guidelines_rhapsodia_Literaria/blob/main/Multidisciplinary%20Conference%20Guidelines.pdf",
        e_registration: "https://forms.gle/u7eK4UBBR2N9t7rPA",
        e_poster: day2_event1
    },
    {
        e_no: 2,
        e_title: "The Confluence",
        e_subtitle: "Poster Presentation Competition for School Students.",
        e_coordinator: "Mrs Cibyna Thomas (+91 8848274816)",
        e_student_coordinators: [
            { name: "Karthika Babukuttan", contact: "+91 96453 60167" },
            { name: "Sharan R", contact: "+91 8921966427" }
        ],
        e_guidelines: "https://github.com/rhapsodialiteraria/Guidelines_rhapsodia_Literaria/blob/main/Poster%20Presentation%20Guidelines.png",
        e_registration: "https://forms.gle/qxdHvZcdBz8YWvif6",
        e_poster: day2_event2
    },
   
];

export default day2_data;
