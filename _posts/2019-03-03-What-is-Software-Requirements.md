---
layout: post
title: What is Software Requirements
subtitle: Everything You Need to Kow About Software Requirements
tags: [business system analysis, system analysis, business analysis]
image: /assets/img/diary.png
bigimg: /assets/img/back.gif
thumbnail-img: /assets/img/diary.png
share-img: /assets/img/diary.png
cover-img: /assets/img/cover.jpg
---

Software requirements play a crucial role in project management, serving as the foundation for successful software development. Understanding and documenting requirements accurately is essential for delivering a product that meets stakeholder expectations. In this blog post, we will explore the importance of software requirements, the role of business analysts in gathering and documenting them, and provide practical insights into the entire requirements management process.

_Quick Links to Topic:_

- [What is Software Requirement?](#what-is-software-requirement)
	- [Relationship between different types of requirements and project success:](#relationship-between-different-types-of-requirements-and-project-success)
		- [Functional Requirements:](#functional-requirements)
		- [Non-Functional Requirements:](#non-functional-requirements)
			- [Product Constraints:](#product-constraints)
	- [Category of Software Requirements](#category-of-software-requirements)
	- [Importance of Software Requirements in Project Management:](#importance-of-software-requirements-in-project-management)
	- [Role of Business Analysts in Gathering and Documenting Requirements:](#role-of-business-analysts-in-gathering-and-documenting-requirements)
	- [The Requirements Gathering Process:](#the-requirements-gathering-process)
	- [Analyzing and Prioritizing Requirements:](#analyzing-and-prioritizing-requirements)
		- [What Makes a Good Requirements?](#what-makes-a-good-requirements)
	- [SMART Requirement](#smart-requirement)
		- [What is a SMART Requirement?](#what-is-a-smart-requirement)
	- [Documenting Software Requirements:](#documenting-software-requirements)
	- [Managing Changes in Software Requirements:](#managing-changes-in-software-requirements)
	- [Ensuring Traceability in Software Requirements:](#ensuring-traceability-in-software-requirements)
	- [Validating and Verifying Software Requirements:](#validating-and-verifying-software-requirements)
		- [Checklist for Producing Valid Requirement:](#checklist-for-producing-valid-requirement)
- [Terms to Avoid while writing requirements :](#terms-to-avoid-while-writing-requirements-)
- [Business Rules](#business-rules)
	- [Business Rules Explained](#business-rules-explained)
	- [Business Rules Vs Business Requirement](#business-rules-vs-business-requirement)
	- [Business Rules Best Practices:](#business-rules-best-practices)



# What is Software Requirement?

Software requirements serve as detailed descriptions of the services that software must provide. They can vary in complexity, ranging from high-level abstract declarations of user needs to comprehensive mathematical functional requirement specifications.

A software requirement represents a need, whether functional or non-functional, that must be implemented in a system. The term "functional" pertains to the provision of specific services to the user.

For instance, in the context of a banking application, when a customer clicks "View Balance," they should be able to access their most recent account balance.

A non-functional software requirement can also involve performance, such as ensuring that every page of the system is viewable to consumers within 5 seconds.



## Relationship between different types of requirements and project success:

Business requirements serve to establish the project's purpose and align it with organizational objectives. They provide a clear understanding of why the project is being undertaken and how it contributes to the overall goals of the organization. 

Functional requirements, on the other hand, define the specific features and behaviors that the software system must possess to fulfill its intended purpose. These requirements outline the functionalities that users expect from the system and specify what actions the system should be able to perform.

Non-functional requirements encompass qualities that go beyond the specific functionalities of the system. These requirements address aspects such as performance, usability, security, reliability, and maintainability. They focus on how well the system performs, how user-friendly it is, and how it ensures the safety and integrity of data.

Technical requirements, as the name suggests, concentrate on the technical aspects of the system. They involve ensuring compatibility and integration with existing technologies and infrastructure within the organization. These requirements consider factors such as hardware, software, network capabilities, scalability, and interoperability.


By paying careful attention to business, functional, non-functional, and technical requirements, organizations can deliver high-quality solutions that meet user needs, align with business objectives, and seamlessly function within the technical landscape. This comprehensive approach ensures that the developed software system is not only capable of performing the required functionalities but also meets the broader organizational goals and technical requirements.

### Functional Requirements:

**Product Scope:** Defines the boundaries and connections to other products.
Functional and Data Requirements: Specifies the actions the product must perform and the data it manipulates.

**Example of Functional Requirements:**

- The product should track recipes at the ingredient and quantity level.
- An administrator should be able to edit recipes.
- The product should display pending orders.
- The product should provide recipe details for order fulfillment.
- Ingredient tracking should include cost, vendors, and inventory quantity.
- The product should integrate with the existing Point of Sale system.

### Non-Functional Requirements:

- **Look and Feel Requirements:** Describes the intended appearance of the product.
- **Usability Requirements:** Considers the ease of use for the intended users.
- **Performance Requirements:** Specifies aspects such as speed, accuracy, and reliability.
- **Operational Requirements:** Addresses the product's intended operating environment.
- **Maintainability and Portability Requirements:** Considers the ease of making changes to the product.
- **Security Requirements:** Ensures the security, confidentiality, and integrity of the product.
- **Cultural and Political Requirements:** Considers human factors and cultural aspects.
- **Legal Requirements:** Ensures compliance with applicable laws.

**Example of Non-Functional Requirements:**

- The product should use the company's colors and logos.
- The product should be intuitive, even for first-time users.
- Only bakers and administrators should be able to view recipes.
- The product should be easily upgradable to meet future business needs.
- The product should support multiple bakery locations.

#### Product Constraints:

- **Purpose of the Product:** States the reason for building the product.
- **Client, Customer, and Stakeholders:** Identifies the people who interact with the product.
- **Users of the Product:** Considers the intended end-users and their impact on usability.
- **Requirements Constraints:** Specifies limitations and design restrictions.
- **Naming Conventions and Definitions:** Establishes the vocabulary used in the product.
- **Relevant Facts:** Incorporates external influences that affect the product.
- **Assumptions:** Outlines the assumptions made by the developers.

**Example of Product Constraints:**

- The product development budget should not exceed $50,000.
- The product should run on the company's existing machines.
- The implementation of the product should not disrupt daily business operations.
- The product should include the availability of the last five years of historical data.

## Category of Software Requirements

Requirements are categorized as follows: 
1. Function Requirements:
	a. Things the product must do.
	b. Action the product must take. 
2. Non-Functional Requirements:
	a. Properties or qualities the product must have.
	b. How the product will behave. 
3. Constraints
	a. Global Requirement:
		i. Purpose of the project
		ii. Users of a product


## Importance of Software Requirements in Project Management:


Software requirements define the functionality, performance, and constraints of a software system. They act as a bridge between stakeholders and the development team, ensuring that everyone is aligned on the desired outcomes. Clear and well-defined requirements set the stage for effective project planning, development, and testing. They serve as a baseline for evaluating project success and managing changes throughout the software development lifecycle.

Why Do We Need Requirements?

- Guides the design of the eventual solution.
- Without correct requirements, you cannot build the correct product.

- **About 60% of project failures originate with the requirements.**
- **13.1% of project fails because of incpmplete requirements.**
- **12.4% of project fails because of lack of user involvement.**
- **10.6% of project fails because of lack of user involvement.**
- **9.9% of project fails because of unrealistic expectations.**
- **9.3% of project fails because of lack of executive support.**
- **8.7% of project fails because of lack of changing requirements and specifications.**
- **8.1% of project fails because of lack of planning.**
- **7.5% of project fails because system no longer needed.**

Source: Standish Group survey 1994

## Role of Business Analysts in Gathering and Documenting Requirements:

Business analysts play a crucial role in the requirements management process. They act as intermediaries between stakeholders and the development team, translating business needs into functional requirements. Business analysts employ various techniques to elicit requirements, such as interviews, workshops, and observations. They document and organize the gathered requirements, ensuring that they are complete, consistent, and unambiguous.



## The Requirements Gathering Process:

The requirements gathering process involves identifying and engaging key stakeholders to capture their needs and expectations. Business analysts utilize various techniques to elicit requirements, including interviews, workshops, surveys, and prototyping. These techniques facilitate open discussions, brainstorming sessions, and knowledge sharing, ensuring comprehensive requirement gathering. Once requirements are gathered, they must be documented and organized systematically to maintain clarity and aid in decision-making.

**Phase of the Requirements Process:**

1. Requirement Elicitation
2. Requirement Analysis
3. Requirement Specification
4. Requirements Approval

## Analyzing and Prioritizing Requirements:

Analyzing requirements involves understanding their impact, dependencies, and feasibility. Techniques such as use cases, user stories, and prototypes assist in analyzing requirements and identifying potential conflicts or gaps. Prioritizing requirements is crucial to focus development efforts on delivering the highest business value. Business analysts collaborate with stakeholders to prioritize requirements based on their impact, urgency, and feasibility, considering resource constraints and project goals. Various tools and methodologies, such as MoSCoW prioritization or Kano analysis, can aid in requirements prioritization.

### What Makes a Good Requirements?

We may create a long list of words such as:

    ✅ Accountable ✅ Understandable, ✅ Attainable, ✅ Modifiable,
    ✅ Testable, ✅ Traceable, ✅ Measurable, ✅ Feasible,
    ✅ Allocable, ✅ Concise, ✅ Consistent, ✅ Complete,
    ✅ Correct, ✅ Feasible, ✅ Design Independent,
    ✅ Necessary, ✅ Organized, ✅ Unambiguous,
    ✅ Prioritized, and so on.

But we will use SMART formula like setting goal.

## SMART Requirement

**SMART** = Specific, Measurable, Attainable, Reasonable, Traceable

### What is a SMART Requirement?

    1. Specific:
    Overall:
    	○ Clear, no ambiguity
    	○ Consistent, same terminology throughout
    	○ Simple

    Question to Ask:
    	○ What?
    	○ Why?
    	○ Who ?
    	○ Where?

    Guidelines:
    	○ Avoid "Some", "Several", "Many"
    	○ State pronouns clearly "A calls B it is updated".
    	○ Specify units all with numbers
    	○ Use pictures to clarify understanding
    	○ Provide explanations for terms like "Transmitted", "Sent", "Downloaded", and "Processed"

    2. Measurable:
    	Overall:
    		○ Measure progress towards goal
    		○ Indicators should be quantifiable

    	Question to Ask:
    		○ How much?
    		○ How many?
    		○ How will I know when it is accomplished?

    	Guidelines:
    		○ Ensure measurable during requirement elicitation
    		○ Validate unequivocal success can be proven with that requirement
    		○ Determine tests that will need to be used to verify the requirement was met.
    3. Attainable :
    	Overall:
    		○ Validate requirement is feasible
    			□ Within technical expertise
    			□ Within scope of project
    			□ Within budget
    		○ Sanity check of the project

    	Question to Ask:
    		○ Is there a theoretical solution to the problem?
    		○ Has it been before?
    		○ Are there any known constraint (environment, political, etc.)?

    	Guidelines:
    		○ Determine who has responsibility for satisfying the requirement and validate they can deliver
    		○ Ensure sufficient time, resources, and budget
    		○ Reuse pieces from previous projects.
    4. Reasonable:
    	Overall:
    		○ Validate the effort is worth the requirement

    	Question to Ask:
    		○ Is this worthwhile?
    		○ Is the timing right?
    		○ Does this match our other effort/ needs

    	Guidelines:
    		○ Run all requirements through a "sanity check'
    		○ Ensure the requirement makes sense in context
    5. Traceable:
    	Overall:
    		○ Trace requirement through design, implementation, and testing

    	Question to Ask:
    		○ Can I ensure this requirement has been met in the design solution?
    		○ Can I ensure this requirement has been met in the implementation?
    		○ Can I ensure this requirement has been met in during testing?

    	Guidelines:
    		○ Requirement should include:
    			□ Originators
    			□ Assumptions
    			□  Business justifications
    			□ Dependencies on other requirements
    			□ Importance

## Documenting Software Requirements:

Well-written requirement documents are essential for maintaining clarity and shared understanding among stakeholders and the development team. A well-structured requirement document typically includes sections such as an introduction, functional and non-functional requirements, constraints, assumptions, and acceptance criteria. Best practices for documenting requirements include using clear and concise language, avoiding ambiguity, and providing relevant examples and diagrams. Collaborative tools and platforms can facilitate requirements management, ensuring version control, traceability, and collaboration among team members.

## Managing Changes in Software Requirements:

Inevitably, changes to requirements occur throughout the software development lifecycle. Scope creep and change requests can impact project timelines, budgets, and stakeholder satisfaction. Implementing change control processes and procedures helps manage requirements changes effectively. It involves assessing the impact of changes, identifying potential risks, and communicating the implications to stakeholders. Managing requirement dependencies and conducting impact analysis assists in evaluating the ripple effects of changes, enabling informed decision-making.

## Ensuring Traceability in Software Requirements:

Traceability ensures that each requirement can be traced back to its origin and tracks changes throughout the software development process. It aids in understanding the rationale behind requirements, assessing the impact of changes, and maintaining consistency.

Requirement Traceability Matrices (RTM) help establish traceability links between requirements, design elements, test cases, and other project artifacts. Tools and automation can simplify and streamline traceability management, ensuring accurate tracking and facilitating compliance.

## Validating and Verifying Software Requirements:

Validating requirements involves confirming their correctness, completeness, and alignment with stakeholders' needs. Techniques such as reviews, walkthroughs, and inspections enable stakeholders to provide feedback and identify any gaps or discrepancies in the requirements. Verification, on the other hand, focuses on ensuring that the implemented software meets the specified requirements. Testing plays a vital role in verifying software requirements, validating that the system functions as intended and meets stakeholder expectations.

### Checklist for Producing Valid Requirement:

- [x] Should use the word shall
- [x] Only one shall per requirement
- [x] Written in short, simple sentences
- [x] Consistent terminology
- [x] Stated positively
- [x] Accompanied by notes and comments to support and clarify
- [x] Stated imperatively
- [x] Don’t use will and should
      Tips for Producing Valid Requirement:
- [x] Or – Select one of the options
- [x] Can, should – Expresses desire or suggestion instead of requirement
- [x] Must – 100% reliability
- [x] Are, is, will – Descriptive part to lead into the requirement
- [x] Support, and/or – Confusing
- [x] But not limited to, etc. – Incomplete requirement/thought
- [x] Shall – dictates specification and functional capability

# Terms to Avoid while writing requirements :

    ❌ Adequate ❌ Approximately ❌ Better than ❌ Comparison
    ❌ Easy ❌ Maintainable ❌ Maximize ❌ Minimize
    ❌ Normally ❌ Optimize ❌ Quality product ❌ Quick
    ❌ Rapid ❌ Substantial ❌ Sufficient ❌ Timely

# Business Rules

- What are Business Rules?
- Business Rules vs Business Requirements
- Best Practices

## Business Rules Explained

**Definition:** A business rule is a rule that specifies or constrains a business component and always resolves to true or false.

Rules imply that the system must or must not perform something. There are just two options: black or white. Either "yes" or "no". Not both.

**Example:**

- You must be home by curfew.
- Entered email addresses must appear valid (contain @ and .)
- Each class must have at least one instructor
- Customers must have a valid driver’s license to rent a vehicle
- A quote must be completed prior to an invoice being generated

Then business requirement will help you to fulfill that rule. Like _Wearing a watch that alarm before 30 minutes of curfew._

**Purpose:** Business rules are intended to assert business structure or to control or influence the behavior of the business.

## Business Rules Vs Business Requirement

**Rule:** Entered email addresses must appear valid (contain @, then later .)

**Possible Requirements:**

- Capability to enter email address
- Alert agent when the email doesn’t appear to be valid
- Allow for correction of email if invalid email format is entered

**Rule:** Each course must have at least one instructor

**Possible Requirements:**

- Capability for Dean to assign instructor to course
- Course registration cannot be opened until an instructor is assigned

**Rule:** Customers must have a valid driver’s license to rent a vehicle

**Possible Requirements:**

- Employee to inspect driver’s license
- Ability for employee to validate driver’s license

**Rule:** A quote must be completed prior to an invoice being generated

**Possible Requirements:**

- Capability to enter a quote
- Details from quote must automatically flow to the invoice
- Ability to tie the quote and invoices together for reporting

## Business Rules Best Practices:

- [x] When documenting business rules, keep it simple.
- [x] Business requirements are used to comply with business rules. Keep them both in same document
- [x] Each business rule may need multiple requirements
- [x] Business rules should not be changed
- [x] Changes can cause major constraints down the road

**[⬆ back to top](#what-is-a-test-case)**

---

{% include blog-footer.html %}
{: .box-success}
Enjoy !!!
**See Yaaa, Next.**

![Diary](/assets/img/diary.png "Diary")
