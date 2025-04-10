// Mental health resources data
const mentalHealthResources = {
    "self": {
        "anxiety": {
            "title": "Managing Anxiety",
            "description": "Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. While occasional anxiety is normal, chronic anxiety can interfere with your daily life.",
            "tips": [
                "Practice deep breathing exercises (try 4-7-8 breathing)",
                "Engage in regular physical activity",
                "Limit caffeine and alcohol intake",
                "Establish a consistent sleep routine",
                "Try progressive muscle relaxation techniques",
                "Challenge negative thoughts with evidence"
            ],
            "professional": {
                "name": "Dr. Sarah Johnson",
                "phone": "+15551234567"
            }
        },
        "depression": {
            "title": "Coping with Depression",
            "description": "Depression is more than just feeling sad. It's a persistent condition that affects how you think, feel, and handle daily activities. It often requires long-term treatment.",
            "tips": [
                "Set small, achievable daily goals",
                "Connect with supportive friends or family",
                "Engage in activities you used to enjoy",
                "Practice mindfulness meditation",
                "Maintain a regular sleep schedule",
                "Consider keeping a mood journal"
            ],
            "professional": {
                "name": "Dr. Michael Chen",
                "phone": "+15559876543"
            }
        },
        "stress": {
            "title": "Stress Management",
            "description": "Stress is your body's reaction to any demand or challenge. While short-term stress can be beneficial, chronic stress can lead to health problems.",
            "tips": [
                "Prioritize and organize your tasks",
                "Practice time management techniques",
                "Engage in regular physical exercise",
                "Try relaxation techniques like yoga or tai chi",
                "Learn to say no to additional responsibilities",
                "Make time for hobbies and relaxation"
            ],
            "professional": {
                "name": "Dr. Emily Rodriguez",
                "phone": "+15555678901"
            }
        },
        "sleep": {
            "title": "Improving Sleep",
            "description": "Sleep issues can affect your mood, energy, and overall health. Establishing good sleep hygiene is essential for mental wellbeing.",
            "tips": [
                "Maintain a consistent sleep schedule",
                "Create a relaxing bedtime routine",
                "Keep your bedroom cool, dark, and quiet",
                "Limit screen time before bed",
                "Avoid large meals, caffeine, and alcohol before bedtime",
                "Consider relaxation exercises if you can't sleep"
            ],
            "professional": {
                "name": "Dr. James Wilson",
                "phone": "+15552345678"
            }
        },
        "self-esteem": {
            "title": "Building Self-Esteem",
            "description": "Self-esteem is how you perceive your own worth. Building self-esteem can help you feel more confident and capable in your daily life.",
            "tips": [
                "Practice self-compassion and positive self-talk",
                "Set realistic and achievable goals",
                "Celebrate your accomplishments, no matter how small",
                "Surround yourself with supportive people",
                "Avoid comparing yourself to others",
                "Engage in activities that make you feel good about yourself"
            ],
            "professional": {
                "name": "Dr. Laura Bennett",
                "phone": "+15553456789"
            }
        },
        "anger": {
            "title": "Managing Anger",
            "description": "Anger is a natural emotion, but it can become problematic if it leads to destructive behavior. Learning to manage anger can improve your relationships and overall wellbeing.",
            "tips": [
                "Take deep breaths and count to ten before reacting",
                "Identify triggers and work on avoiding them",
                "Practice relaxation techniques like meditation or yoga",
                "Express your feelings calmly and assertively",
                "Engage in physical activity to release pent-up energy",
                "Seek professional help if anger feels uncontrollable"
            ],
            "professional": {
                "name": "Dr. Kevin Harris",
                "phone": "+15557654321"
            }
        }
    },
    "others": {
        "recognizing": {
            "title": "Recognizing Signs",
            "description": "Recognizing when someone is struggling with their mental health is the first step in offering support. Changes in behavior, mood, or habits can be indicators that someone might need help.",
            "tips": [
                "Withdrawal from social activities they normally enjoy",
                "Significant changes in eating or sleeping patterns",
                "Uncharacteristic mood swings or increased irritability",
                "Difficulty concentrating or making decisions",
                "Expressions of hopelessness or excessive guilt",
                "Increased use of alcohol or other substances",
                "Talk of feeling trapped or being a burden to others"
            ],
            "professional": {
                "name": "Dr. Lisa Thompson",
                "phone": "+15558765432"
            }
        },
        "communication": {
            "title": "Effective Communication",
            "description": "Talking about mental health can be challenging. These strategies can help you communicate effectively with someone who may be struggling.",
            "tips": [
                "Choose a comfortable, private setting for the conversation",
                "Use 'I' statements to express concern without judgment",
                "Practice active listening - focus on understanding, not fixing",
                "Validate their feelings rather than minimizing them",
                "Ask open-ended questions to encourage sharing",
                "Avoid giving advice unless specifically asked",
                "Be patient - they may not be ready to talk immediately"
            ],
            "professional": {
                "name": "Dr. Robert Garcia",
                "phone": "+15554321987"
            }
        },
        "crisis": {
            "title": "Crisis Support",
            "description": "If someone is in immediate danger or experiencing a mental health crisis, it's important to respond appropriately while keeping everyone safe.",
            "tips": [
                "Stay calm and speak in a gentle, reassuring tone",
                "Remove any means of self-harm if possible",
                "Don't leave the person alone if they're in danger",
                "Contact emergency services if there's immediate risk",
                "If possible, involve other trusted individuals for support",
                "After the crisis, help them connect with professional support",
                "Take care of your own emotional needs after the situation"
            ],
            "professional": {
                "name": "Crisis Support Team",
                "phone": "+18002738255"
            }
        },
        "boundaries": {
            "title": "Healthy Boundaries",
            "description": "Setting healthy boundaries is essential when supporting someone with mental health challenges. It helps protect your own wellbeing while offering support.",
            "tips": [
                "Be clear about what you can and cannot do",
                "Communicate your limits respectfully",
                "Avoid taking on more responsibility than you can handle",
                "Encourage the person to seek professional help",
                "Take time for self-care and recharge",
                "Seek support from others if needed"
            ],
            "professional": {
                "name": "Dr. Amanda Lee",
                "phone": "+15551239876"
            }
        },
        "resources": {
            "title": "Finding Resources",
            "description": "Connecting someone to the right resources can make a big difference in their mental health journey. Learn how to find and share helpful resources.",
            "tips": [
                "Research local mental health professionals and services",
                "Share contact information for crisis hotlines",
                "Help them navigate insurance or financial assistance options",
                "Provide information about support groups or community programs",
                "Encourage them to explore self-help tools and apps",
                "Offer to accompany them to their first appointment if needed"
            ],
            "professional": {
                "name": "Dr. Nathan Carter",
                "phone": "+15556789012"
            }
        },
        "self-care": {
            "title": "Caregiver Self-Care",
            "description": "Supporting someone with mental health challenges can be emotionally taxing. Taking care of yourself is essential to continue offering effective support.",
            "tips": [
                "Set aside time for activities you enjoy",
                "Practice mindfulness or relaxation techniques",
                "Seek support from friends, family, or a therapist",
                "Maintain a healthy diet and exercise routine",
                "Get enough sleep to recharge your energy",
                "Remember that it's okay to take breaks"
            ],
            "professional": {
                "name": "Dr. Olivia Martinez",
                "phone": "+15559871234"
            }
        }
    }
};

// Helper function to update the tips list
function updateTipsList(tips, tipsListElement) {
    if (!tipsListElement) return;
    tipsListElement.innerHTML = '';
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsListElement.appendChild(li);
    });
}

// Show resource details
function showResource(issue) {
    const resource = mentalHealthResources.self[issue] || mentalHealthResources.others[issue];
    if (!resource) return;

    const titleElement = document.getElementById('detailTitle');
    const descriptionElement = document.getElementById('detailDescription');
    const tipsListElement = document.getElementById('detailTips');
    const proNameElement = document.getElementById('proName');
    const phoneLinkElement = document.getElementById('proPhone');
    const resourceDetailElement = document.getElementById('resourceDetail');
    const resourceGridElement = document.querySelector('.resource-grid');

    // Update resource details if elements exist
    if (titleElement) titleElement.textContent = resource.title;
    if (descriptionElement) descriptionElement.textContent = resource.description;
    updateTipsList(resource.tips, tipsListElement);
    if (proNameElement) proNameElement.textContent = resource.professional.name;
    if (phoneLinkElement) {
        phoneLinkElement.href = `tel:${resource.professional.phone}`;
        phoneLinkElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg> Call Now`;
        phoneLinkElement.setAttribute('aria-label', `Call ${resource.professional.name}`);
    }

    // Toggle visibility
    if (resourceDetailElement) resourceDetailElement.classList.remove('hidden');
    if (resourceGridElement) resourceGridElement.classList.add('hidden');
}

// Hide resource details
function hideResource() {
    const resourceDetailElement = document.getElementById('resourceDetail');
    const resourceGridElement = document.querySelector('.resource-grid');

    if (resourceDetailElement) resourceDetailElement.classList.add('hidden');
    if (resourceGridElement) resourceGridElement.classList.remove('hidden');
}
