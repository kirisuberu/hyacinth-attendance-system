import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  CaretDown, 
  CaretRight, 
  Question, 
  Clock, 
  User, 
  Calendar, 
  ChartBar, 
  Shield,
  House,
  SignIn,
  SignOut as SignOutIcon,
  ArrowRight,
  MouseSimple,
  Eye
} from 'phosphor-react';

const Tutorials = () => {
  const [activeGuide, setActiveGuide] = useState(null);

  const toggleGuide = (index) => {
    setActiveGuide(activeGuide === index ? null : index);
  };

  const howToGuides = [
    {
      category: "Essential Tasks",
      icon: <Clock size={20} />,
      color: "#4CAF50",
      guides: [
        {
          title: "How to Clock In and Out",
          description: "Learn the step-by-step process to record your attendance",
          steps: [
            {
              step: 1,
              action: "Look at the sidebar on the left",
              detail: "Find the green 'Time In' button at the bottom of the sidebar",
              clickTarget: "Time In Button",
              icon: <SignIn size={16} />
            },
            {
              step: 2,
              action: "Click the 'Time In' button",
              detail: "This will record your arrival time and change your status to 'Clocked In'",
              clickTarget: "Green Time In Button",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Verify your status",
              detail: "Check that the status box shows 'Clocked In' in green",
              clickTarget: "Status Display",
              icon: <Eye size={16} />
            },
            {
              step: 4,
              action: "When leaving, click 'Time Out'",
              detail: "The red 'Time Out' button will now be available to end your shift",
              clickTarget: "Red Time Out Button",
              icon: <SignOutIcon size={16} />
            }
          ]
        },
        {
          title: "How to View Your Attendance History",
          description: "Access and review your complete attendance records",
          steps: [
            {
              step: 1,
              action: "Navigate to the sidebar",
              detail: "Look for the navigation menu on the left side of your screen",
              clickTarget: "Sidebar Navigation",
              icon: <House size={16} />
            },
            {
              step: 2,
              action: "Click 'Attendance Logs'",
              detail: "Find and click the 'Attendance Logs' option in the main navigation",
              clickTarget: "Attendance Logs Link",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Review your records",
              detail: "Browse through your clock-in/out history, dates, and attendance status",
              clickTarget: "Records Table",
              icon: <Eye size={16} />
            },
            {
              step: 4,
              action: "Use filters if needed",
              detail: "Apply date filters or search options to find specific records",
              clickTarget: "Filter Options",
              icon: <ArrowRight size={16} />
            }
          ]
        }
      ]
    },
    {
      category: "Profile Management",
      icon: <User size={20} />,
      color: "#2196F3",
      guides: [
        {
          title: "How to Update Your Profile",
          description: "Modify your personal information and account settings",
          steps: [
            {
              step: 1,
              action: "Go to the sidebar",
              detail: "Locate the navigation panel on the left side",
              clickTarget: "Sidebar",
              icon: <House size={16} />
            },
            {
              step: 2,
              action: "Click 'Profile'",
              detail: "Select the 'My Profile' or 'Profile' option from the menu",
              clickTarget: "Profile Link",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Choose a tab",
              detail: "Select either 'Personal' or 'Work' tab to edit different information",
              clickTarget: "Tab Buttons",
              icon: <ArrowRight size={16} />
            },
            {
              step: 4,
              action: "Edit and save",
              detail: "Update your information and click 'Save Changes' button",
              clickTarget: "Save Button",
              icon: <MouseSimple size={16} />
            }
          ]
        },
        {
          title: "How to Change Your Password",
          description: "Update your account password for security",
          steps: [
            {
              step: 1,
              action: "Navigate to Profile",
              detail: "Click 'Profile' in the sidebar navigation",
              clickTarget: "Profile Link",
              icon: <User size={16} />
            },
            {
              step: 2,
              action: "Find Security section",
              detail: "Scroll down to locate the password change section",
              clickTarget: "Security Section",
              icon: <Eye size={16} />
            },
            {
              step: 3,
              action: "Enter current password",
              detail: "Type your existing password in the 'Current Password' field",
              clickTarget: "Current Password Field",
              icon: <MouseSimple size={16} />
            },
            {
              step: 4,
              action: "Set new password",
              detail: "Enter your new password twice for confirmation, then save",
              clickTarget: "New Password Fields",
              icon: <ArrowRight size={16} />
            }
          ]
        }
      ]
    },
    {
      category: "Schedule & Time",
      icon: <Calendar size={20} />,
      color: "#FF9800",
      guides: [
        {
          title: "How to View Your Schedule",
          description: "Check your work schedule and shift assignments",
          steps: [
            {
              step: 1,
              action: "Open sidebar menu",
              detail: "Look at the left navigation panel",
              clickTarget: "Sidebar",
              icon: <House size={16} />
            },
            {
              step: 2,
              action: "Click 'Schedule'",
              detail: "Select the 'Schedule' option from the main navigation",
              clickTarget: "Schedule Link",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Choose view type",
              detail: "Select between 'Personal' or 'Department' schedule view",
              clickTarget: "View Tabs",
              icon: <ArrowRight size={16} />
            },
            {
              step: 4,
              action: "Navigate dates",
              detail: "Use calendar controls to view different weeks or months",
              clickTarget: "Calendar Navigation",
              icon: <Eye size={16} />
            }
          ]
        },
        {
          title: "How to Change Time Zone Settings",
          description: "Adjust your time zone and format preferences",
          steps: [
            {
              step: 1,
              action: "Find User Settings",
              detail: "Scroll down in the sidebar to locate 'User Settings' section",
              clickTarget: "User Settings Section",
              icon: <Eye size={16} />
            },
            {
              step: 2,
              action: "Click 'Change Time Region'",
              detail: "Select the time region option (may show a lock icon if restricted)",
              clickTarget: "Time Region Button",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Select time zone",
              detail: "Choose your preferred time zone from the dropdown menu",
              clickTarget: "Time Zone Dropdown",
              icon: <ArrowRight size={16} />
            },
            {
              step: 4,
              action: "Set time format",
              detail: "Toggle between 12-hour (AM/PM) and 24-hour format, then save",
              clickTarget: "Format Toggle & Save",
              icon: <MouseSimple size={16} />
            }
          ]
        },
        {
          title: "How to Navigate and Use Department Schedule",
          description: "View and manage department-wide schedules and team member shifts",
          steps: [
            {
              step: 1,
              action: "Navigate to Schedule",
              detail: "Click 'Schedule' in the sidebar navigation menu",
              clickTarget: "Schedule Link",
              icon: <Calendar size={16} />
            },
            {
              step: 2,
              action: "Switch to Department view",
              detail: "Click the 'Department' tab at the top of the schedule page",
              clickTarget: "Department Tab",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Browse team schedules",
              detail: "View all department members' schedules in a unified calendar view",
              clickTarget: "Department Calendar",
              icon: <Eye size={16} />
            },
            {
              step: 4,
              action: "Filter by team member",
              detail: "Use the dropdown or filters to view specific employees' schedules",
              clickTarget: "Employee Filter",
              icon: <ArrowRight size={16} />
            },
            {
              step: 5,
              action: "Navigate time periods",
              detail: "Use calendar controls to view different weeks, months, or date ranges",
              clickTarget: "Calendar Navigation Controls",
              icon: <Calendar size={16} />
            },
            {
              step: 6,
              action: "View schedule details",
              detail: "Click on any schedule entry to see shift details, times, and assignments",
              clickTarget: "Schedule Entry",
              icon: <Eye size={16} />
            }
          ]
        }
      ]
    },
    {
      category: "Admin Tasks",
      icon: <Shield size={20} />,
      color: "#9C27B0",
      guides: [
        {
          title: "How to Manage User Registrations (Admin)",
          description: "Review and approve new user registration requests",
          steps: [
            {
              step: 1,
              action: "Expand Admin Panel",
              detail: "Click the arrow next to 'Admin Panel' in the sidebar to expand it",
              clickTarget: "Admin Panel Arrow",
              icon: <CaretDown size={16} />
            },
            {
              step: 2,
              action: "Click 'Registration Requests'",
              detail: "Select this option from the expanded admin menu",
              clickTarget: "Registration Requests Link",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Review pending requests",
              detail: "Browse through the list of users waiting for approval",
              clickTarget: "Requests Table",
              icon: <Eye size={16} />
            },
            {
              step: 4,
              action: "Approve or reject",
              detail: "Click 'Approve' or 'Reject' buttons for each request",
              clickTarget: "Action Buttons",
              icon: <ArrowRight size={16} />
            }
          ]
        },
        {
          title: "How to Generate Reports (Admin)",
          description: "Create attendance and performance reports",
          steps: [
            {
              step: 1,
              action: "Open Admin Panel",
              detail: "Expand the Admin Panel section in the sidebar",
              clickTarget: "Admin Panel",
              icon: <CaretDown size={16} />
            },
            {
              step: 2,
              action: "Click 'Reports'",
              detail: "Navigate to the Reports section",
              clickTarget: "Reports Link",
              icon: <MouseSimple size={16} />
            },
            {
              step: 3,
              action: "Select report type",
              detail: "Choose from attendance, department, or user-specific reports",
              clickTarget: "Report Type Selector",
              icon: <ArrowRight size={16} />
            },
            {
              step: 4,
              action: "Apply filters and generate",
              detail: "Set date ranges and other filters, then click 'Generate Report'",
              clickTarget: "Generate Button",
              icon: <MouseSimple size={16} />
            }
          ]
        }
      ]
    }
  ];

  return (
    <TutorialsContainer>
      <Header>
        <Title>Step-by-Step How-To Guides</Title>
        <Subtitle>Visual guides showing exactly what to click and where to navigate</Subtitle>
      </Header>

      <GuidesContainer>
        {howToGuides.map((category, categoryIndex) => (
          <CategorySection key={categoryIndex}>
            <CategoryHeader style={{ background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}CC 100%)` }}>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.category}</CategoryTitle>
            </CategoryHeader>
            
            <GuidesGrid>
              {category.guides.map((guide, guideIndex) => {
                const guideId = `${categoryIndex}-${guideIndex}`;
                const isExpanded = activeGuide === guideId;
                
                return (
                  <GuideCard key={guideIndex}>
                    <GuideHeader onClick={() => toggleGuide(guideId)}>
                      <GuideIcon>
                        {isExpanded ? <CaretDown size={18} /> : <CaretRight size={18} />}
                      </GuideIcon>
                      <GuideInfo>
                        <GuideTitle>{guide.title}</GuideTitle>
                        <GuideDescription>{guide.description}</GuideDescription>
                      </GuideInfo>
                    </GuideHeader>
                    
                    {isExpanded && (
                      <StepsContainer>
                        <FlowDiagram>
                          {guide.steps.map((step, stepIndex) => (
                            <StepItem key={stepIndex}>
                              <StepNumber>{step.step}</StepNumber>
                              <StepContent>
                                <StepAction>
                                  <StepIcon>{step.icon}</StepIcon>
                                  <ActionText>{step.action}</ActionText>
                                </StepAction>
                                <StepDetail>{step.detail}</StepDetail>
                                <ClickTarget>
                                  <MouseSimple size={14} />
                                  Click: <strong>{step.clickTarget}</strong>
                                </ClickTarget>
                              </StepContent>
                              {stepIndex < guide.steps.length - 1 && (
                                <StepConnector>
                                  <ArrowRight size={16} />
                                </StepConnector>
                              )}
                            </StepItem>
                          ))}
                        </FlowDiagram>
                      </StepsContainer>
                    )}
                  </GuideCard>
                );
              })}
            </GuidesGrid>
          </CategorySection>
        ))}
      </GuidesContainer>

      <QuickTipsSection>
        <QuickTipsTitle>Quick Navigation Tips</QuickTipsTitle>
        <TipsGrid>
          <TipCard>
            <TipIcon style={{ color: '#4CAF50' }}>
              <House size={24} />
            </TipIcon>
            <TipText>
              <strong>Sidebar Navigation:</strong> All main features are accessible from the left sidebar menu
            </TipText>
          </TipCard>
          <TipCard>
            <TipIcon style={{ color: '#2196F3' }}>
              <Eye size={24} />
            </TipIcon>
            <TipText>
              <strong>Status Indicators:</strong> Look for color-coded status messages and icons throughout the app
            </TipText>
          </TipCard>
          <TipCard>
            <TipIcon style={{ color: '#FF9800' }}>
              <MouseSimple size={24} />
            </TipIcon>
            <TipText>
              <strong>Interactive Elements:</strong> Buttons and links change appearance when you hover over them
            </TipText>
          </TipCard>
        </TipsGrid>
      </QuickTipsSection>

      <ContactSection>
        <ContactTitle>Need More Help?</ContactTitle>
        <ContactText>
          If you need additional assistance, contact your system administrator or IT support team.
        </ContactText>
      </ContactSection>
    </TutorialsContainer>
  );
};

export default Tutorials;

const TutorialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const GuidesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CategorySection = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  color: white;
`;

const CategoryIcon = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const GuidesGrid = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GuideCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const GuideHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  background: #f8f9fa;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #e9ecef;
  }
`;

const GuideIcon = styled.div`
  margin-right: 1rem;
  color: #667eea;
  display: flex;
  align-items: center;
`;

const GuideInfo = styled.div`
  flex: 1;
`;

const GuideTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
`;

const GuideDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
`;

const StepsContainer = styled.div`
  padding: 1.5rem;
  background: white;
  border-top: 1px solid #e0e0e0;
`;

const FlowDiagram = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StepItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
`;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #667eea;
`;

const StepAction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StepIcon = styled.div`
  color: #667eea;
  display: flex;
  align-items: center;
`;

const ActionText = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const StepDetail = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
`;

const ClickTarget = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.5rem;
  border-radius: 4px;
  
  strong {
    color: #333;
  }
`;

const StepConnector = styled.div`
  position: absolute;
  left: 15px;
  top: 40px;
  color: #ccc;
  transform: rotate(90deg);
`;

const QuickTipsSection = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
`;

const QuickTipsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const TipCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TipIcon = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const TipText = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0;
  line-height: 1.4;
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`;
