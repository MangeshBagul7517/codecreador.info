import React from 'react'

const services =  {
        experience: {
            title: "Experience Design",
            image: "https://images.pexels.com/photos/891030/pexels-photo-891030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            buttonText: "Explore experience design",
            isReverse: true,
            items:  [
                { id: 1, path: 'ui-ux-design', title: "UI/UX Design" },
                { id: 2,path: 'website-design', title: "Website Design" },
                { id: 3,path: 'mobile-experience',title: "Mobile Experience" },
                { id: 4,path: 'commerce-experience',title: "Commerce Experience" },
                { id: 5,path: 'hmi',title: "Human Machine Interface (HMI)" },
                { id: 6,path: 'applications-and-dashboards',title: "Applications and Dashboards" },
                { id: 7,path: 'wearable-app-design',title: "Wearable App Design" },
                { id: 8,path: 'cross-paltform-experience-design',title: "Cross-Platform Experience Design" },
                { id: 9,path: 'design-support-and-maintenance',title: "Design Support and Maintenance" },
              ]
        },
        technology : {
            title: "Technology",
            image: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            buttonText: "Explore technology",
            isReverse: false,
            items: [
              { id: 1, path:"devops-consulting", title: "DevOps Consulting" },
              { id: 2, path:"data-analytics", title: "Data & Analytics" },
              { id: 3, path:"ai-and-ml", title: "AI & Machine Learning" },
              { id: 4, path:"web-development", title: "Web Development" },
              { id: 5, path:"mobile-app-development", title: "Mobile App Development" },
              { id: 6, path:"e-commerce", title: "E-commerce" },
              { id: 7, path:"quality-assurance", title: "Quality Assurance & Testing" },
              { id: 8, path:"cloud-services", title: "Cloud Services" },
              { id: 9, path:"cyber-security", title: "Cyber Security" },
            ],
          },
          digitalMarketing : {
            title: "Digital Marketing",
            image: "https://images.pexels.com/photos/4065888/pexels-photo-4065888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            buttonText: "Explore digital marketing",
            isReverse: true,
            items: [
              { id: 1, path:"social-media-management", title: "Social Media Management" },
              { id: 2, path:"performance-marketing", title: "Performance Marketing" },
              { id: 3, path:"search-engine-optimisation", title: "Search Engine Optimisation" },
              { id: 4, path:"content-marketing", title: "Content Marketing" },
              { id: 5, path:"marketing-automation", title: "Marketing Automation" },
              { id: 6, path:"analytics", title: "Analytics" },
            ],
          },

          // from branding pending to add pages
          branding : {
            title: "Branding",
            image: "https://images.pexels.com/photos/3183126/pexels-photo-3183126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            buttonText: "Explore branding",
            isReverse: false,
            items: [
              { id: 1, path:"brand-consulting", title: "Brand Consulting" },
              { id: 2, path:"logo-design", title: "Logo Design" },
              { id: 3, path:"brand-collateral", title: "Brand Collateral" },
              { id: 4, path:"graphic-design", title: "Graphic Design" },
              { id: 5, path:"2d-3d-visualisation", title: "2D / 3D Visualization" },
              { id: 6, path:"brand-identity", title: "Brand Identity" },
              { id: 7, path:"industrial-product-design", title: "Industrial Product Design" },
            ],
          },

          OurImpact : {
            title: "Our Impact",
            description:
              "Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives, and build ecosystems that foster progress.",
            stats: [
              {
                value: "700+",
                description: "Projects launched successfully across the globe",
              },
              {
                value: "10M",
                description: "Daily customer engagement through our projects",
              },
              {
                value: "100+",
                description: "Digital transformation stories that made a difference",
              },
            ],
            buttonText: "Our Impact",
          }
    }

export default services