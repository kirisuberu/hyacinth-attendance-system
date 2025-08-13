import React from 'react';
import styled from 'styled-components';
import { Buildings, Briefcase, CalendarCheck } from 'phosphor-react';

const CompanyDepartmentSection = ({ 
  userData,
  companies,
  departments,
  loadingCompanies,
  loadingDepartments,
  formatTimestamp
}) => {
  // Resolve companies for display (supports single company fallback)
  const renderCompanies = () => {
    if (loadingCompanies) return <EmptyText>Loading company information...</EmptyText>;
    if (!companies || companies.length === 0) return <EmptyText>No companies data available</EmptyText>;

    const ids = Array.isArray(userData?.companies) && userData.companies.length > 0
      ? userData.companies
      : (userData?.company ? [userData.company] : []);

    if (ids.length === 0) return <EmptyText>Not affiliated with any company</EmptyText>;

    return (
      <ChipsWrap>
        {ids.map((companyId) => {
          const company = companies.find(c => c.id === companyId);
          return (
            <Chip key={companyId} $variant="company">{company ? company.name : companyId}</Chip>
          );
        })}
      </ChipsWrap>
    );
  };

  const renderDepartments = () => {
    if (loadingDepartments) return <EmptyText>Loading department information...</EmptyText>;
    if (!departments || departments.length === 0) return <EmptyText>No departments data available</EmptyText>;

    const ids = Array.isArray(userData?.departments) ? userData.departments : [];
    if (ids.length === 0) return <EmptyText>Not assigned to any department</EmptyText>;

    return (
      <ChipsWrap>
        {ids.map((deptId) => {
          const dept = departments.find(d => d.id === deptId);
          const label = dept ? `${dept.name}${dept.code ? ` (${dept.code})` : ''}` : deptId;
          return (
            <Chip key={deptId} $variant="dept">{label}</Chip>
          );
        })}
      </ChipsWrap>
    );
  };

  return (
    <WorkSectionWrapper>
      <InfoHeader>
        <div>
          <SectionKicker>Work</SectionKicker>
          <SectionLead>Company, departments, and position</SectionLead>
        </div>
      </InfoHeader>

      <InfoGrid>
        <InfoTile>
          <IconBubble>
            <Buildings size={18} />
          </IconBubble>
          <TileBody>
            <TileLabel>Company</TileLabel>
            <TileValue>{renderCompanies()}</TileValue>
          </TileBody>
        </InfoTile>

        <InfoTile>
          <IconBubble>
            <Buildings size={18} />
          </IconBubble>
          <TileBody>
            <TileLabel>Departments</TileLabel>
            <TileValue>{renderDepartments()}</TileValue>
          </TileBody>
        </InfoTile>

        <InfoTile>
          <IconBubble>
            <Briefcase size={18} />
          </IconBubble>
          <TileBody>
            <TileLabel>Position</TileLabel>
            <TileValue>{userData?.position || <EmptyText>Not specified</EmptyText>}</TileValue>
          </TileBody>
        </InfoTile>

        <InfoTile>
          <IconBubble>
            <CalendarCheck size={18} />
          </IconBubble>
          <TileBody>
            <TileLabel>Date Hired</TileLabel>
            <TileValue>
              {userData?.dateHired
                ? (typeof formatTimestamp === 'function'
                    ? formatTimestamp(userData.dateHired)
                    : (() => {
                        try {
                          // Fallback formatting if formatter not provided
                          if (userData.dateHired?.toDate) return userData.dateHired.toDate().toLocaleDateString();
                          if (typeof userData.dateHired === 'object' && (userData.dateHired.seconds || userData.dateHired._seconds)) {
                            const secs = userData.dateHired.seconds || userData.dateHired._seconds;
                            return new Date(secs * 1000).toLocaleDateString();
                          }
                          const d = new Date(userData.dateHired);
                          return isNaN(d.getTime()) ? 'Invalid date' : d.toLocaleDateString();
                        } catch {
                          return 'Invalid date';
                        }
                      })())
                : <EmptyText>Not specified</EmptyText>}
            </TileValue>
          </TileBody>
        </InfoTile>
      </InfoGrid>
    </WorkSectionWrapper>
  );
};

// styled-components (kept at the bottom per project preference)
const WorkSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionKicker = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #800000;
  font-weight: 700;
`;

const SectionLead = styled.div`
  font-size: 0.9rem;
  color: #757575;
  margin-top: 4px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
`;

const InfoTile = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fff;
  transition: box-shadow 0.2s ease, transform 0.05s ease;

  &:hover {
    box-shadow: 0 6px 14px rgba(0,0,0,0.08);
  }
`;

const IconBubble = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff3f3;
  color: #800000;
`;

const TileBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TileLabel = styled.div`
  font-size: 0.8rem;
  color: #757575;
  font-weight: 600;
`;

const TileValue = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 1rem;
  color: #333;
`;

const ChipsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${(p) => (p.$variant === 'dept' ? '#f3e5f5' : '#fff8e1')};
  color: ${(p) => (p.$variant === 'dept' ? '#7b1fa2' : '#ff8f00')};
`;

const EmptyText = styled.span`
  color: #9e9e9e;
`;

export default CompanyDepartmentSection;
