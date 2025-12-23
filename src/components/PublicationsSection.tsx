import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, Users } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Automated OMR Analyzer using ML & Image Processing",
      journal: "International Journal of Research and Analytical Reviews (IJRASET)",
      publishDate: "May 2025",
      status: "Published",
      description: "This research paper presents an innovative approach to automated OMR sheet analysis using machine learning algorithms and advanced image processing techniques. The system demonstrates superior accuracy even under challenging conditions such as poor lighting and misaligned sheets.",
      authors: ["Manoj Manjappa Halammanavar", "Co-Authors"],
      keywords: ["Machine Learning", "Image Processing", "OMR Analysis", "Computer Vision", "Automation"],
      impact: "Contributes to educational technology by improving accuracy and efficiency of automated assessment systems."
    }
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Publications & Research
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="card-shadow hover:card-shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        {pub.status}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {pub.publishDate}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {pub.journal}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Authors:</span>
                    <span className="text-sm text-foreground">{pub.authors.join(", ")}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pub.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, keywordIndex) => (
                      <span 
                        key={keywordIndex}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-accent/50 rounded-lg mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Research Impact</h4>
                  <p className="text-sm text-muted-foreground">{pub.impact}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="default" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Full Paper
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Citation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Machine Learning", "Computer Vision", "Image Processing", "Educational Technology", "Automation", "Artificial Intelligence", "Data Analytics"].map((interest, index) => (
              <div 
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-smooth cursor-default"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;