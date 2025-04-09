import React, { useEffect } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";

interface BlogPopupProps {
  blog: Blog | null;
  onClose: () => void;
}

const getBlogContent = (id: number): string => {
  switch (id) {
    case 1:
      return `
        <h2>Why Employee Well-Being is the Key to Business Success</h2>
        
        <p>Employee well-being is no longer just a perk—it's a business imperative. Organizations that prioritize mental health and overall well-being see higher productivity, better retention rates, and a more engaged workforce. As the modern workplace evolves, companies must recognize that supporting employees' mental and emotional health is a direct investment in business success.</p>
        
        <h3>The Link Between Well-Being and Productivity</h3>
        <p>When employees feel supported mentally and emotionally, their ability to focus, solve problems, and collaborate improves significantly. Studies show that happy employees are up to 20% more productive than unhappy ones. Well-being initiatives, such as mental health programs, mindfulness training, and access to wellness resources, help reduce absenteeism and presenteeism—ensuring employees bring their best selves to work.</p>
        
        <h3>Reducing Turnover and Increasing Employee Loyalty</h3>
        <p>A company's investment in well-being directly affects retention. Employees who feel valued and supported are far more likely to stay long-term. In contrast, high-stress work environments with little mental health support contribute to burnout and high turnover rates. Providing accessible mental health tools, flexible work arrangements, and stress management programs fosters a culture where employees feel secure and engaged.</p>
        
        <h3>Boosting Creativity and Innovation</h3>
        <p>A mentally healthy workforce is a more creative one. When employees feel less stress and anxiety, they have the mental capacity to think outside the box, take calculated risks, and contribute innovative ideas. Companies like Google and Salesforce have recognized this link, implementing well-being strategies that empower employees to perform at their peak.</p>
        
        <h3>Creating a Positive Workplace Culture</h3>
        <p>A workplace culture that prioritizes well-being is one that attracts top talent. Employees today seek more than just a paycheck—they want a work environment that values their health and happiness. Businesses that offer well-being initiatives, such as mental health support, guided journaling, and AI-powered wellness apps, position themselves as forward-thinking and employee-centric.</p>
        
        <h3>The Bottom Line: Well-Being Drives Business Success</h3>
        <p>Ignoring employee well-being is costly. Stress-related absenteeism and disengagement cost companies billions annually. On the other hand, organizations that invest in mental health programs see measurable returns—higher productivity, improved retention, and a stronger workplace culture. Prioritizing well-being isn't just the right thing to do; it's the smart thing to do for long-term business success.</p>
      `;
    case 2:
      return `
        <h2>The Hidden Cost of Workplace Stress</h2>
        
        <p>Stress is an unavoidable part of work, but when left unaddressed, it becomes a major liability. Workplace stress leads to decreased productivity, increased absenteeism, and higher turnover rates—costing businesses billions annually. Companies that fail to recognize and mitigate stress risk not only financial losses but also long-term damage to workplace culture and employee well-being.</p>
        
        <h3>The Financial Toll of Workplace Stress</h3>
        <p>Chronic stress leads to burnout, disengagement, and a rise in health-related absenteeism. Studies estimate that workplace stress costs businesses over $300 billion per year in lost productivity and healthcare expenses. Employees who feel overwhelmed by stress are more likely to make mistakes, struggle with decision-making, and ultimately leave their jobs in search of a healthier work environment.</p>
        
        <h3>Common Workplace Stressors</h3>
        <p>Many stress factors contribute to employee burnout, including:</p>
        <ul>
          <li>High workloads and unrealistic deadlines</li>
          <li>Lack of autonomy and control over tasks</li>
          <li>Poor communication and unclear expectations</li>
          <li>Toxic workplace culture and lack of support</li>
          <li>Job insecurity and financial stress</li>
        </ul>
        <p>Addressing these stressors requires a proactive approach that fosters a healthier, more supportive work environment.</p>
        
        <h3>How Companies Can Reduce Workplace Stress</h3>
        <p><strong>Offer AI-Powered Well-Being Support:</strong> Digital wellness tools provide employees with 24/7 access to stress management techniques, guided mindfulness, and AI-driven chat coaches to help them navigate challenges in real time.</p>
        <p><strong>Encourage Work-Life Balance:</strong> Flexible work schedules, remote work options, and reasonable workloads prevent burnout and improve job satisfaction.</p>
        <p><strong>Foster a Culture of Open Communication:</strong> Encouraging employees to voice their concerns without fear of repercussions helps build trust and reduces stress.</p>
        <p><strong>Provide Stress Management Training:</strong> Teaching employees how to manage stress effectively leads to a more resilient and engaged workforce.</p>
        
        <h3>The Competitive Advantage of a Low-Stress Workplace</h3>
        <p>Companies that actively reduce workplace stress see tangible benefits—higher employee satisfaction, increased retention, and a more productive workforce. Investing in mental health and well-being initiatives is no longer optional; it's a critical component of long-term business success. Organizations that prioritize employee well-being gain a competitive edge, ensuring they attract and retain top talent in an increasingly demanding job market.</p>
      `;
    case 3:
      return `
        <h2>How AI Is Transforming Employee Well-Being</h2>
        
        <p>In today's fast-paced work environment, employee well-being has become a critical factor in business success. Stress, burnout, and mental health challenges not only affect productivity but also contribute to high turnover rates and workplace dissatisfaction. Traditional well-being programs, while helpful, often fall short due to accessibility issues and lack of personalization. This is where AI-powered well-being apps step in, revolutionizing the way companies support their employees.</p>
        
        <h3>24/7 Support: A Game-Changer for Employee Mental Health</h3>
        <p>One of the biggest advantages of AI-driven well-being apps is their round-the-clock availability. Unlike traditional in-person counseling or scheduled check-ins, an AI-powered chat coach is always accessible, providing instant support whenever employees need it. This ensures that help is just a tap away, whether it's late at night, during a stressful workday, or over the weekend.</p>
        
        <h3>Confidential and Judgment-Free Space</h3>
        <p>Many employees hesitate to seek mental health support due to stigma or fear of judgment. AI-driven chat coaches provide a safe, confidential environment where employees can express their thoughts freely. This encourages more people to seek help without worrying about workplace biases or consequences.</p>
        
        <h3>Enhancing Productivity and Focus</h3>
        <p>Mental well-being directly impacts focus and efficiency. By providing immediate stress relief techniques, mindfulness exercises, and guided reflections, AI-powered well-being apps help employees regain mental clarity and maintain productivity. When employees feel supported, they are more engaged, creative, and motivated in their roles.</p>
        
        <h3>Cost-Effective and Scalable for Businesses</h3>
        <p>Traditional mental health programs can be expensive and difficult to scale across large organizations. AI-powered well-being apps offer a cost-effective solution that can be easily integrated into existing HR systems. Whether a company has 10 employees or 10,000, these apps provide consistent support without the logistical challenges of hiring and managing a large team of counselors.</p>
        
        <h3>Seamless Integration into Daily Workflows</h3>
        <p>Unlike rigid wellness programs that require employees to attend scheduled sessions, AI-powered well-being tools integrate seamlessly into daily routines. Employees can engage with the chat coach during work breaks, at the end of the day, or whenever they feel the need for a mental reset. This flexibility ensures higher engagement and better results.</p>
        
        <h3>The Future of Workplace Well-Being is AI-Driven</h3>
        <p>AI-powered well-being apps represent the next frontier in workplace mental health. They provide employees with the tools they need to thrive while giving businesses a scalable, cost-effective way to support well-being. As more companies recognize the value of mental health in employee satisfaction and performance, adopting AI-driven solutions will become a standard rather than an option.</p>
      `;
    case 4:
      return `
        <h2>Boost Well-Being to Improve Performance</h2>
        
        <p>Supporting mental well-being reduces stress and builds resilience, leading to a more engaged and productive workforce. When employees feel mentally and emotionally healthy, they bring their best selves to work every day.</p>
        
        <h3>The Connection Between Well-Being and Performance</h3>
        <p>Research consistently shows that employees with strong mental well-being demonstrate higher levels of focus, creativity, and problem-solving abilities. By investing in well-being programs, companies create an environment where people can thrive personally and professionally.</p>
        
        <h3>Practical Strategies for Boosting Well-Being</h3>
        <p>Effective well-being initiatives include mindfulness training, stress management resources, and accessible mental health support. AI-powered coaching provides personalized guidance that helps employees develop emotional resilience and maintain peak performance even during challenging times.</p>
        
        <h3>Measuring the Impact</h3>
        <p>Organizations that prioritize well-being see measurable improvements in key performance indicators, including reduced absenteeism, higher engagement scores, and increased retention rates. The return on investment for well-being programs extends beyond individual performance to overall organizational success.</p>
      `;
    case 5:
      return `
        <h2>Creating a Positive Workplace Culture</h2>
        
        <p>Employees today seek more than just a paycheck—they want a work environment that values their health and happiness. A positive workplace culture is built on trust, respect, and genuine concern for employee well-being.</p>
        
        <h3>The Elements of a Positive Culture</h3>
        <p>A truly positive workplace culture incorporates regular recognition, open communication, and an emphasis on work-life balance. When employees feel valued both as professionals and individuals, they develop stronger loyalty to the organization and greater commitment to its mission.</p>
        
        <h3>The Role of Leadership</h3>
        <p>Leaders set the tone for workplace culture through their actions and priorities. When leaders openly discuss mental health, participate in well-being initiatives, and model healthy behaviors, they create psychological safety that empowers all employees to prioritize their well-being.</p>
        
        <h3>Technology as a Culture Enabler</h3>
        <p>Digital well-being tools can reinforce positive culture by providing accessible resources that demonstrate an organization's commitment to employee health. AI coaching platforms offer personalized support that helps employees navigate workplace challenges while feeling supported by their organization.</p>
      `;
    case 6:
      return `
        <h2>AI Coaching: The Future of Workplace Support</h2>
        
        <p>Digital wellness tools provide employees with personalized guidance and real-time strategies to navigate workplace challenges. As organizations look for scalable ways to support their teams, AI coaching emerges as a powerful solution.</p>
        
        <h3>The Evolution of Workplace Support</h3>
        <p>Traditional support methods like occasional workshops or limited counseling sessions are giving way to more flexible, accessible solutions. AI coaching represents the next generation of support—always available, consistently helpful, and continuously learning to better serve each user's needs.</p>
        
        <h3>Personalization at Scale</h3>
        <p>One of the most remarkable aspects of AI coaching is its ability to provide highly personalized guidance to thousands of employees simultaneously. Each user receives recommendations and strategies tailored to their specific challenges, goals, and preferences.</p>
        
        <h3>Breaking Down Barriers to Support</h3>
        <p>Many employees hesitate to seek help due to stigma, time constraints, or availability issues. AI coaching eliminates these barriers by offering private, 24/7 support that employees can access on their own terms. This accessibility ensures that more team members get the help they need before challenges escalate.</p>
        
        <h3>The Human-AI Partnership</h3>
        <p>Rather than replacing human connection, effective AI coaching complements it. Organizations that implement AI coaching alongside manager training and peer support create a comprehensive well-being ecosystem that addresses the full spectrum of employee needs.</p>
      `;
    default:
      return "<p>Content not available</p>";
  }
};

const BlogPopup = ({ blog, onClose }: BlogPopupProps) => {
  if (!blog) return null;
  
  // Add keyboard event listener to close on Escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[999] flex flex-col bg-white dark:bg-blacksection overflow-hidden mt-[-45px]">
      {/* Header with back button - added top padding and increased header height */}
      <div className="sticky top-[100px] flex items-center justify-between px-4 py-5 border-b border-stroke dark:border-strokedark bg-white dark:bg-blacksection">
        <div className="flex items-center">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary"
            aria-label="Back"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h2 className="text-xl font-bold text-black dark:text-white ml-4 truncate max-w-[250px] md:max-w-md lg:max-w-2xl text-center">{blog.title}</h2>
        </div>
      </div>
      
      {/* Blog content - scrollable with increased top spacing */}
      <div className="flex-1 overflow-y-auto ">
        <div className="max-w-4xl mx-auto px-4 py-10 md:px-8">
          <div className="mb-8">
            <img 
              src={blog.mainImage} 
              alt={blog.title} 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          
          <div 
            className="blog-details"
            dangerouslySetInnerHTML={{ __html: getBlogContent(blog._id) }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPopup;