type PrototypeVariant = "accounting" | "audit" | "registration" | "payroll" | "legal" | "automation";

const names: Record<PrototypeVariant, { screens: string[]; nav: string[] }> = {
  accounting: { screens: ["Processing Dashboard", "Workflow Queue", "Control Records"], nav: ["Overview","Queues","Controls","Reports"] },
  audit: { screens: ["Engagement Dashboard", "Assignments", "Client Records"], nav: ["Clients","Engagements","Team","Documents"] },
  registration: { screens: ["Registration Tracker", "Requirements", "Activity"], nav: ["Requests","Stages","Documents","SLA"] },
  payroll: { screens: ["Payroll Run", "Attendance Review", "Payroll Records"], nav: ["Payroll","Employees","Time","Reports"] },
  legal: { screens: ["Matter Dashboard", "Matter Workflow", "Case Records"], nav: ["Matters","Tasks","Calendar","Documents"] },
  automation: { screens: ["Automation Console", "Workflow Builder", "Run Logs"], nav: ["Apps","Triggers","Files","Logs"] },
};

function Accounting({screen}:{screen:number}){
  if(screen===2) return <div className="pp-board"><div><b>New</b><span/><span/></div><div><b>Review</b><span/><span/><span/></div><div><b>Process</b><span/><span/></div><div><b>Complete</b><span/></div></div>;
  if(screen===3) return <div className="pp-table pp-account-table"><header><span>Control</span><span>Status</span><span>Owner</span><span>Updated</span></header>{[1,2,3,4,5].map(i=><div key={i}><span>OPS-{100+i}</span><span className={i<4?"ok":"warn"}>{i<4?"Cleared":"Review"}</span><span>Team {i}</span><span>Today</span></div>)}</div>;
  return <><div className="pp-kpis"><div><small>IN QUEUE</small><b>24</b></div><div><small>PROCESSING</small><b>11</b></div><div><small>COMPLETED</small><b>86</b></div></div><div className="pp-split"><div className="pp-bars"><span style={{height:"34%"}}/><span style={{height:"58%"}}/><span style={{height:"47%"}}/><span style={{height:"78%"}}/><span style={{height:"65%"}}/><span style={{height:"88%"}}/></div><div className="pp-queue"><p><i/> Validation queue <b>8</b></p><p><i/> For processing <b>11</b></p><p><i/> Exceptions <b>5</b></p></div></div></>;
}

function Audit({screen}:{screen:number}){
  if(screen===2) return <div className="pp-audit-grid">{["Planning","Fieldwork","Review"].map((x,j)=><section key={x}><b>{x}</b>{[0,1,2].slice(0,j+1).map(i=><span key={i}><i/> Engagement {j+1}{i+1}</span>)}</section>)}</div>;
  if(screen===3) return <div className="pp-client-list">{["Northstar Trading","Blue Peak Co.","Cedar Works","Atlas Retail"].map((x,i)=><div key={x}><span className="pp-avatar">{x[0]}</span><p><b>{x}</b><small>{i%2?"Annual Audit":"Review Engagement"}</small></p><em>{i<3?"Active":"Draft"}</em></div>)}</div>;
  return <><div className="pp-kpis"><div><small>CLIENTS</small><b>32</b></div><div><small>ACTIVE</small><b>14</b></div><div><small>FOR REVIEW</small><b>6</b></div></div><div className="pp-engagement"><div className="pp-ring"><strong>72%</strong><span>On track</span></div><div className="pp-progress-list"><p><span>Planning</span><i><b style={{width:"90%"}}/></i></p><p><span>Fieldwork</span><i><b style={{width:"68%"}}/></i></p><p><span>Review</span><i><b style={{width:"42%"}}/></i></p></div></div></>;
}

function Registration({screen}:{screen:number}){
  if(screen===2) return <div className="pp-checklist">{["Application form","Registration document","Supporting attachment","Proof of submission","Final record"].map((x,i)=><p key={x}><i className={i<3?"done":""}>{i<3?"✓":""}</i><span>{x}</span><em>{i<3?"Complete":"Pending"}</em></p>)}</div>;
  if(screen===3) return <div className="pp-timeline">{["Request created","Documents uploaded","Initial review","For processing","Completion"].map((x,i)=><div key={x}><i className={i<3?"done":""}/><p><b>{x}</b><small>{i<3?"Completed":"Upcoming stage"}</small></p></div>)}</div>;
  return <><div className="pp-stage"><span className="done">1<small>Request</small></span><i/><span className="done">2<small>Documents</small></span><i/><span className="active">3<small>Review</small></span><i/><span>4<small>Process</small></span><i/><span>5<small>Complete</small></span></div><div className="pp-registration-cards"><div><small>CURRENT STAGE</small><b>Document Review</b><p>3 of 5 stages</p></div><div><small>REQUIREMENTS</small><b>8 / 10</b><p>2 remaining</p></div></div></>;
}

function Payroll({screen}:{screen:number}){
  if(screen===2) return <div className="pp-time-list">{["Employee 014","Employee 028","Employee 041","Employee 055"].map((x,i)=><div key={x}><span className="pp-avatar">{i+1}</span><p><b>{x}</b><small>{8+i}.0 hrs • Today</small></p><em className={i===3?"warn":""}>{i===3?"Review":"Approved"}</em></div>)}</div>;
  if(screen===3) return <div className="pp-table"><header><span>Employee</span><span>Gross</span><span>Deductions</span><span>Net</span></header>{[1,2,3,4].map(i=><div key={i}><span>EMP-{100+i}</span><span>₱ --</span><span>₱ --</span><span>₱ --</span></div>)}</div>;
  return <><div className="pp-payroll-head"><div><small>PAY PERIOD</small><b>Current Cycle</b><span>Processing</span></div><div className="pp-ring payroll"><strong>84%</strong><span>Calculated</span></div></div><div className="pp-kpis payroll-kpis"><div><small>EMPLOYEES</small><b>128</b></div><div><small>REVIEW</small><b>7</b></div><div><small>APPROVED</small><b>104</b></div></div></>;
}

function Legal({screen}:{screen:number}){
  if(screen===2) return <div className="pp-legal-board">{["Intake","Active","For Review"].map((x,j)=><section key={x}><b>{x}</b>{[0,1,2].slice(0,3-j).map(i=><span key={i}><small>MAT-{j+1}0{i+1}</small><strong>Sample Matter</strong><em>{j===1?"Due soon":"Open"}</em></span>)}</section>)}</div>;
  if(screen===3) return <div className="pp-table"><header><span>Matter</span><span>Client</span><span>Stage</span><span>Deadline</span></header>{[1,2,3,4].map(i=><div key={i}><span>MAT-20{i}</span><span>Client {i}</span><span>{i%2?"Active":"Review"}</span><span>-- / --</span></div>)}</div>;
  return <><div className="pp-kpis"><div><small>ACTIVE MATTERS</small><b>18</b></div><div><small>THIS WEEK</small><b>5</b></div><div><small>FOR REVIEW</small><b>4</b></div></div><div className="pp-deadlines"><b>Upcoming activity</b>{["Matter review","Document deadline","Client follow-up"].map((x,i)=><p key={x}><span>{x}</span><em>{i+1}d</em></p>)}</div></>;
}

function Automation({screen}:{screen:number}){
  if(screen===2) return <div className="pp-flow-builder"><div><b>Form</b><small>Input</small></div><i>→</i><div><b>Validate</b><small>Rules</small></div><i>→</i><div><b>Process</b><small>Script</small></div><i>→</i><div><b>Output</b><small>Drive / Email</small></div></div>;
  if(screen===3) return <div className="pp-log">{["06:42:10","06:42:14","06:42:15","06:43:01"].map((x,i)=><p key={x}><span>{x}</span><b>{i===2?"Validation warning":"Run completed"}</b><em className={i===2?"warn":""}>{i===2?"CHECK":"OK"}</em></p>)}</div>;
  return <><div className="pp-sheet"><div className="pp-sheet-head"><b>A</b><b>B</b><b>C</b><b>D</b><b>E</b></div>{[1,2,3,4].map(r=><div key={r}><small>{r}</small><span/><span/><span/><span/><span/></div>)}</div><div className="pp-trigger"><i/><span><b>Automation active</b><small>Last run: successful</small></span><em>LIVE</em></div></>;
}

export default function PortfolioPrototype({variant,screen=1,compact=false}:{variant:string;screen?:number;compact?:boolean}){
  const typed=(variant in names?variant:"accounting") as PrototypeVariant;
  const meta=names[typed];
  return (
    <div className={`portfolio-prototype prototype-${typed} ${compact?"prototype-compact":""}`} aria-label={`${meta.screens[screen-1]} sanitized prototype`}>
      <div className="pp-browser"><span className="pp-dots"><i/><i/><i/></span><span>{compact?"Prototype Preview":meta.screens[screen-1]}</span><em>REINYG DEMO</em></div>
      <div className="pp-shell">
        <aside><strong>REINYG</strong>{meta.nav.map((item,i)=><span className={i===screen-1?"active":""} key={item}>{item}</span>)}</aside>
        <div className="pp-main">
          <header><div><small>{meta.screens[screen-1].toUpperCase()}</small><b>{typed==="registration"?"Registration Workspace":typed==="payroll"?"Workforce Console":typed==="audit"?"Practice Workspace":typed==="legal"?"Matter Workspace":typed==="automation"?"Automation Studio":"Operations Workspace"}</b></div><span className="pp-live"><i/> Active</span></header>
          {typed==="accounting"&&<Accounting screen={screen}/>}
          {typed==="audit"&&<Audit screen={screen}/>}
          {typed==="registration"&&<Registration screen={screen}/>}
          {typed==="payroll"&&<Payroll screen={screen}/>}
          {typed==="legal"&&<Legal screen={screen}/>}
          {typed==="automation"&&<Automation screen={screen}/>}
        </div>
      </div>
      <div className="pp-foot"><span>Sanitized portfolio prototype</span><span>No production data</span></div>
    </div>
  );
}
