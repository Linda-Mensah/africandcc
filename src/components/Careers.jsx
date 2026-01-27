import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Code,
  BookOpen,
  Building2,
  Heart,
  Mail,
  ChevronDown,
  ChevronUp,
  Globe,
  Award,
  Users,
  Clock,
  Target,
  Sparkles,
  Users2,
  Zap,
  ArrowRight,
  FileText,
  Star,
  Search,
  GraduationCap,
} from "lucide-react";

export const Careers = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const jobOpportunities = [
    {
      id: 1,
      title: "Fundraising & Partnerships Coordinator",
      type: "Volunteer (Unpaid)",
      location: "Remote/Hybrid",
      icon: DollarSign,
      description:
        "Help build funding relationships, identify grant opportunities, and support donor engagement.",
      keyResponsibilities: [
        "Research grants, sponsors, and donor prospects",
        "Support proposal writing and fundraising campaigns",
        "Cultivate relationships with community partners",
        "Assist with donor outreach and recognition",
        "Support fundraising events and outreach activities",
      ],
      idealFor:
        "Someone passionate about nonprofit growth, community development, and resource mobilization",
    },
    {
      id: 2,
      title: "Program Associate",
      type: "Internship (Unpaid; academic credit available)",
      location: "Remote/Hybrid",
      icon: BookOpen,
      description:
        "Support the planning and delivery of ADCC programs including cultural education and youth leadership.",
      keyResponsibilities: [
        "Assist in coordinating cultural and educational programs",
        "Support outreach to families and partner organizations",
        "Maintain schedules, registration, and participant engagement",
        "Conduct research for curriculum and program design",
        "Provide on-site support during programs and events",
      ],
      idealFor:
        "Students interested in community programming and cultural education",
    },
    {
      id: 3,
      title: "Operations Associate",
      type: "Internship (Unpaid; academic credit available)",
      location: "Remote/Hybrid",
      icon: Building2,
      description:
        "Help manage daily operations and strengthen organizational efficiency for our community hub.",
      keyResponsibilities: [
        "Assist with administrative tasks, scheduling, and documentation",
        "Support volunteer coordination and internal communication",
        "Maintain records, files, and digital databases",
        "Assist in improving workflow systems and processes",
        "Provide support during community events and hub activities",
      ],
      idealFor:
        "Detail-oriented individuals interested in nonprofit operations",
    },
    {
      id: 4,
      title: "IT Officer (Webmaster)",
      type: "Volunteer (Unpaid)",
      location: "Remote/Hybrid",
      icon: Code,
      description:
        "Manage ADCC's website, digital platforms, and online content to support our digital presence.",
      keyResponsibilities: [
        "Maintain and update ADCC's website and online platforms",
        "Upload digital content, event information, and program materials",
        "Ensure website performance, security, and accessibility",
        "Support development of digital museum and multimedia archives",
        "Provide basic IT support for staff and virtual programs",
      ],
      idealFor:
        "Web developers or digital communications professionals wanting to contribute skills to community impact",
    },
  ];

  const benefits = [
    {
      title: "Meaningful Impact",
      description: "Contribute to uplifting African diaspora families",
      icon: Heart,
      color: "text-rose-500",
    },
    {
      title: "Hands-on Experience",
      description: "Gain practical skills in nonprofit development",
      icon: Briefcase,
      color: "text-blue-500",
    },
    {
      title: "Passionate Team",
      description: "Work with mission-driven collaborators",
      icon: Users2,
      color: "text-emerald-500",
    },
    {
      title: "Skill Development",
      description: "Build expertise in your chosen field",
      icon: Award,
      color: "text-amber-500",
    },
    {
      title: "Flexible Schedule",
      description: "Remote/Hybrid opportunities available",
      icon: Clock,
      color: "text-indigo-500",
    },
    {
      title: "Community Connection",
      description: "Join a growing diaspora network",
      icon: Globe,
      color: "text-purple-500",
    },
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Helper function to render job type badge
  const renderJobTypeBadge = (type) => {
    if (type.includes("Volunteer")) {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
          <Users className="w-3 h-3" />
          Volunteer (Unpaid)
        </span>
      );
    } else if (type.includes("Internship")) {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-green-50 text-green-800 border border-green-200">
          <GraduationCap className="w-3 h-3" />
          Internship • Academic Credit Available
        </span>
      );
    }
    return null;
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 mb-8 border border-amber-200">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">
              Join Our Team
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Build Community
            <span className="block text-amber-700">with Purpose</span>
          </h1>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-10 rounded-full"></div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            At ADCC, we're building a vibrant, culturally grounded community hub
            for the African diaspora. Join us in creating meaningful impact
            through cultural preservation, community empowerment, and racial
            equity.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 rounded-xl border border-gray-300 shadow-sm max-w-2xl mx-auto">
            <Target className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="font-medium text-center">
              Together, we strengthen identity, empower generations, and build
              community.
            </p>
          </div>
        </div>

        {/* Open Opportunities Section */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Current Opportunities
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any position to view complete details and
              responsibilities
            </p>
          </div>

          <div className="space-y-5">
            {jobOpportunities.map((job) => {
              const IconComponent = job.icon;
              const isExpanded = expandedCard === job.id;

              return (
                <div
                  key={job.id}
                  className={`group bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-amber-500 shadow-lg"
                      : "border-gray-300 hover:border-amber-400 hover:shadow-md"
                  }`}
                >
                  {/* Job Summary */}
                  <button
                    onClick={() => toggleCard(job.id)}
                    className="w-full p-6 lg:p-7 flex items-start justify-between transition-all hover:bg-gray-50/50"
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`relative flex-shrink-0 ${
                          isExpanded ? "scale-110" : "group-hover:scale-105"
                        } transition-transform duration-300`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        </div>
                      </div>

                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          {renderJobTypeBadge(job.type)}
                          <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                        </div>

                        <p className="text-gray-700 mb-4 max-w-2xl">
                          {job.description}
                        </p>

                        <div className="flex items-center gap-2 text-amber-700 font-medium text-sm">
                          <span>View full details</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="ml-4 flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-amber-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-amber-500 transition-colors" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="px-6 lg:px-7 pb-7 border-t border-gray-200">
                      <div className="pt-6 space-y-8">
                        {/* Compensation Info */}
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center">
                                <DollarSign className="w-4 h-4 text-amber-700" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  Position Type & Benefits
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {job.type} • Remote/Hybrid • Flexible hours
                                  {job.type.includes("Internship") && (
                                    <span className="block text-emerald-600 font-medium mt-1">
                                      ✓ Academic credit available for eligible
                                      students
                                    </span>
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Ideal Candidate */}
                        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-5 border border-amber-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                              <Users className="w-4 h-4 text-amber-700" />
                            </div>
                            <h4 className="font-semibold text-gray-900">
                              Ideal Candidate
                            </h4>
                          </div>
                          <p className="text-gray-800 pl-11">{job.idealFor}</p>
                        </div>

                        {/* Key Responsibilities */}
                        <div>
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                              <FileText className="w-4 h-4 text-gray-700" />
                            </div>
                            <h4 className="font-semibold text-gray-900 text-lg">
                              Key Responsibilities
                            </h4>
                          </div>
                          <ul className="space-y-3 pl-11">
                            {job.keyResponsibilities.map(
                              (responsibility, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                                  </div>
                                  <span className="text-gray-700">
                                    {responsibility}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-6 border-t border-gray-200">
                          <a
                            href="mailto:jobs@africandcc.org"
                            className="group/btn inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
                          >
                            <Mail className="w-5 h-5" />
                            <span>Apply for this Position</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Join ADCC Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Join ADCC?
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the unique benefits of contributing to our mission-driven
              organization
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl border border-gray-300 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${benefit.color.replace("text", "bg")}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-amber-200 transition-colors">
                    <div className="w-6 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-10 border border-gray-300">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
                  <Star className="w-3 h-3 text-amber-600" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How to Apply
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg border border-gray-300">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center">
                      <FileText className="w-3 h-3 text-amber-700" />
                    </div>
                    Required Documents
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Resume</span>
                      <span className="text-sm font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                        Required
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">
                        Cover Letter
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        Optional
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-300">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center">
                      <Mail className="w-3 h-3 text-amber-700" />
                    </div>
                    Send Application To
                  </h4>
                  <a
                    href="mailto:jobs@africandcc.org"
                    className="inline-flex items-center gap-2 text-lg font-bold text-amber-700 hover:text-amber-800 transition-colors group/link"
                  >
                    <span>jobs@africandcc.org</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-5 border border-gray-300">
                <div className="text-center">
                  <p className="text-gray-700 mb-3">
                    All positions are currently unpaid. Internship positions
                    offer academic credit for eligible students.
                  </p>
                  <p className="text-amber-700 font-semibold">
                    Thank you for your interest in joining the ADCC team!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 pt-12 border-t border-gray-300 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          </div>
          <p className="text-gray-700 font-medium tracking-wide">
            Empowering Generations • Building Community • Celebrating Heritage
          </p>
        </div>
      </div>
    </section>
  );
};
