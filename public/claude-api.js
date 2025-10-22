// Claude API Integration
// This script sets up the window.claude object for generating PRDs

window.claude = {
  complete: async (prompt) => {
    // TODO: Replace this with your actual Claude API integration
    // You can use the Anthropic API directly or set up a backend proxy

    // For now, this is a mock implementation that returns a sample PRD
    // In production, you should:
    // 1. Set up a backend API endpoint that calls Claude
    // 2. Or use Anthropic's SDK directly (requires API key management)

    console.log('Generating PRD with prompt:', prompt);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return a sample PRD based on the prompt
    return generateSamplePRD(prompt);
  }
};

function generateSamplePRD(prompt) {
  // Extract information from the prompt
  const lines = prompt.split('\n');
  let productFeature = 'Your Product';
  let targetUsers = 'Your Target Users';
  let keyFeatures = 'Key Features';

  for (const line of lines) {
    if (line.includes('Product/Feature:')) {
      productFeature = line.split('Product/Feature:')[1].trim();
    } else if (line.includes('Target Users & Problem:')) {
      targetUsers = line.split('Target Users & Problem:')[1].trim();
    } else if (line.includes('Key Functionality & Success Metrics:')) {
      keyFeatures = line.split('Key Functionality & Success Metrics:')[1].trim();
    }
  }

  return `# One-pager: ${productFeature}

## 1. TL;DR
${productFeature} is designed for ${targetUsers}. This solution addresses the critical need for improved workflow efficiency and user satisfaction through innovative features and intuitive design.

## 2. Goals

### Business Goals
* Increase user engagement and retention
* Drive revenue through enhanced features
* Establish market leadership in the target segment
* Build a scalable platform for future growth

### User Goals
* Accomplish tasks more efficiently
* Reduce time spent on manual processes
* Improve collaboration and communication
* Access insights and data in real-time

### Non-Goals
* Complete automation of all processes (maintain human oversight)
* Support for legacy systems (focus on modern tech stack)
* Enterprise-level features in MVP (keep it lean initially)

## 3. User stories

**Primary Persona: The Busy Professional**
* As a user, I want to quickly access relevant information so that I can make informed decisions faster
* As a team lead, I want to track progress in real-time so that I can identify blockers early
* As a collaborator, I want seamless communication tools so that I can work effectively with my team

**Secondary Persona: The Data-Driven Manager**
* As a manager, I want comprehensive analytics so that I can measure team performance
* As a decision-maker, I want customizable dashboards so that I can focus on metrics that matter

## 4. Functional requirements

### Must-Have (P0)
* User authentication and profile management
* Core feature implementation: ${keyFeatures}
* Real-time data synchronization
* Mobile-responsive design
* Basic analytics and reporting

### Should-Have (P1)
* Advanced filtering and search capabilities
* Customizable user preferences
* Integration with popular third-party tools
* Notification system for important updates

### Nice-to-Have (P2)
* AI-powered recommendations
* Advanced collaboration features
* White-label options
* API access for external developers

## 5. User experience

### Primary User Journey
* User signs up/logs in with minimal friction (social auth supported)
* Onboarding flow introduces key features in under 2 minutes
* Dashboard presents most relevant information first
* Quick actions are accessible within 2 clicks from any page
* Data auto-saves to prevent loss of work

### Edge Cases & UI Notes
* Handle slow network connections gracefully (show loading states)
* Provide clear error messages with actionable next steps
* Support keyboard navigation for power users
* Ensure accessibility compliance (WCAG 2.1 AA)
* Gracefully handle large datasets without performance degradation

## 6. Narrative

**A Day in the Life with ${productFeature.split(' ')[0]}**

Sarah starts her morning coffee ritual by opening the app. Immediately, she sees an overview of her team's progress—no need to dig through emails or ping colleagues. The dashboard highlights three items needing her attention, prioritized by urgency.

With a quick tap, she reviews the first item, adds her feedback, and assigns it back to her teammate. The notification goes out instantly. Mid-morning, she gets a ping that a project milestone is at risk. The system has automatically flagged it based on current progress trends.

Instead of scheduling an emergency meeting, Sarah uses the built-in collaboration tools to quickly align with her team. They adjust priorities, and the timeline auto-updates. By lunch, they're back on track.

Throughout the day, Sarah checks in periodically, each time spending just minutes to stay informed and make decisions. No more hour-long status meetings. No more hunting for updates. Just clarity, efficiency, and control.

## 7. Success metrics

### Primary Metrics
* Daily Active Users (DAU) / Monthly Active Users (MAU) ratio > 40%
* Time-to-value: Users complete first key action within 5 minutes
* User retention: 70% of users return within 7 days
* Task completion rate: 85% of started workflows are completed

### Secondary Metrics
* Net Promoter Score (NPS) > 50
* Average session duration: 15-20 minutes
* Feature adoption rate: 60% of users utilize core features within first week
* Customer satisfaction score: 4.5/5 or higher

## 8. Milestones & sequencing

### Phase 1: MVP (Weeks 1-6)
* Week 1-2: Core infrastructure and authentication
* Week 3-4: Primary feature implementation
* Week 5: UI/UX polish and testing
* Week 6: Beta launch with limited users

### Phase 2: Beta Refinement (Weeks 7-10)
* Week 7-8: Gather feedback and iterate on core features
* Week 9: Add P1 features based on user feedback
* Week 10: Performance optimization and bug fixes

### Phase 3: Public Launch (Weeks 11-12)
* Week 11: Marketing preparation and final QA
* Week 12: Public launch and monitoring

### Phase 4: Growth (Ongoing)
* Implement P2 features based on usage data
* Expand integrations and partnerships
* Scale infrastructure to support growth
* Continuous improvement based on user feedback

---

**Note:** This PRD is a living document. As we learn from users and the market, we'll iterate on priorities and features. Keep it scrappy, ship fast, and learn quickly.`;
}
