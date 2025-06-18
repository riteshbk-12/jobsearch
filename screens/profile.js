import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// Import your color and size constants
import {
  PRIMARY,
  PRIMARY_LIGHT,
  SUCCESS,
  SUCCESS_LIGHT,
  INFO,
  INFO_LIGHT,
  BACKGROUND,
  BACKGROUND_SECONDARY,
  WHITE,
  BORDER,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_TERTIARY,
  SHADOW_COLOR,
} from '../constants/colors';

import {
  FONT_SIZE_SM,
  FONT_SIZE_MD,
  FONT_SIZE_LG,
  FONT_SIZE_XL,
  FONT_SIZE_XXL,
  SPACING_SM,
  SPACING_MD,
  SPACING_LG,
  SPACING_XL,
  SPACING_XXL,
  PADDING_MD,
  PADDING_LG,
  PADDING_XL,
  MARGIN_SM,
  MARGIN_MD,
  MARGIN_LG,
  BORDER_RADIUS,
  BORDER_RADIUS_SM,
  BORDER_RADIUS_ROUND,
  BUTTON_HEIGHT,
  SCREEN_PADDING,
  SHADOW_OFFSET,
  SHADOW_OPACITY,
  SHADOW_RADIUS,
  ELEVATION,
} from '../constants/sizes';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const userData = {
    name: 'Sarah Johnson',
    title: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    experience: '5+ years',
    skills: ['React Native', 'JavaScript', 'Node.js', 'MongoDB', 'Python'],
    bio: 'Passionate software engineer with expertise in mobile and web development. Love creating innovative solutions and working with cross-functional teams.',
    applications: 12,
    savedJobs: 8,
    profileViews: 156,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  };

  const StatCard = ({ title, value, color = PRIMARY }) => (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );

  const SkillTag = ({ skill }) => (
    <View style={styles.skillTag}>
      <Text style={styles.skillText}>{skill}</Text>
    </View>
  );

  const MenuOption = ({ icon, title, subtitle, onPress, showArrow = true }) => (
    <TouchableOpacity style={styles.menuOption} onPress={onPress}>
      <View style={styles.menuContent}>
        <Text style={styles.menuIcon}>{icon}</Text>
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>{title}</Text>
          {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      {showArrow && <Text style={styles.menuArrow}>›</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backIcon}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => setIsEditing(!isEditing)}
            >
              <Text style={styles.editIcon}>✎</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Info Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: userData.avatar }} style={styles.avatar} />
            <TouchableOpacity style={styles.cameraButton}>
              <Text style={styles.cameraIcon}>📷</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.title}>{userData.title}</Text>
          <Text style={styles.location}>📍 {userData.location}</Text>
          
          <View style={styles.contactInfo}>
            <Text style={styles.contactText}>📧 {userData.email}</Text>
            <Text style={styles.contactText}>📞 {userData.phone}</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <StatCard title="Applications" value={userData.applications} color={PRIMARY} />
          <StatCard title="Saved Jobs" value={userData.savedJobs} color={SUCCESS} />
          <StatCard title="Profile Views" value={userData.profileViews} color={INFO} />
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bioText}>{userData.bio}</Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {userData.skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </View>
        </View>

        {/* Menu Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuContainer}>
            <MenuOption
              icon="👤"
              title="Personal Information"
              subtitle="Update your personal details"
              onPress={() => console.log('Personal Info')}
            />
            <MenuOption
              icon="🔔"
              title="Notifications"
              subtitle="Manage your notification preferences"
              onPress={() => console.log('Notifications')}
            />
            <MenuOption
              icon="🔒"
              title="Privacy & Security"
              subtitle="Control your privacy settings"
              onPress={() => console.log('Privacy')}
            />
            <MenuOption
              icon="📊"
              title="Job Preferences"
              subtitle="Set your job search criteria"
              onPress={() => console.log('Job Preferences')}
            />
            <MenuOption
              icon="💼"
              title="Resume & CV"
              subtitle="Manage your documents"
              onPress={() => console.log('Resume')}
            />
            <MenuOption
              icon="❓"
              title="Help & Support"
              subtitle="Get help or contact support"
              onPress={() => console.log('Help')}
            />
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: WHITE,
    paddingHorizontal: SCREEN_PADDING,
    paddingVertical: PADDING_LG,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS_SM,
    backgroundColor: BACKGROUND_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: FONT_SIZE_XL,
    color: TEXT_PRIMARY,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: FONT_SIZE_XL,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS_SM,
    backgroundColor: PRIMARY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    fontSize: FONT_SIZE_MD,
    color: PRIMARY,
  },
  profileSection: {
    backgroundColor: WHITE,
    alignItems: 'center',
    paddingVertical: SPACING_XXL,
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: MARGIN_MD,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: MARGIN_LG,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: PRIMARY_LIGHT,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: WHITE,
  },
  cameraIcon: {
    fontSize: 14,
  },
  name: {
    fontSize: FONT_SIZE_XXL,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: MARGIN_SM,
  },
  title: {
    fontSize: FONT_SIZE_LG,
    color: TEXT_SECONDARY,
    textAlign: 'center',
    marginBottom: MARGIN_SM,
  },
  location: {
    fontSize: FONT_SIZE_MD,
    color: TEXT_TERTIARY,
    textAlign: 'center',
    marginBottom: MARGIN_LG,
  },
  contactInfo: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: FONT_SIZE_SM,
    color: TEXT_SECONDARY,
    marginBottom: MARGIN_SM,
  },
  statsSection: {
    flexDirection: 'row',
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: MARGIN_LG,
    gap: SPACING_MD,
  },
  statCard: {
    flex: 1,
    backgroundColor: WHITE,
    padding: PADDING_LG,
    borderRadius: BORDER_RADIUS,
    borderLeftWidth: 4,
    shadowColor: SHADOW_COLOR,
    shadowOffset: SHADOW_OFFSET,
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: SHADOW_RADIUS,
    elevation: ELEVATION,
  },
  statValue: {
    fontSize: FONT_SIZE_XL,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
    marginBottom: MARGIN_SM,
  },
  statTitle: {
    fontSize: FONT_SIZE_SM,
    color: TEXT_SECONDARY,
  },
  section: {
    backgroundColor: WHITE,
    marginBottom: MARGIN_MD,
    paddingHorizontal: SCREEN_PADDING,
    paddingVertical: PADDING_XL,
  },
  sectionTitle: {
    fontSize: FONT_SIZE_LG,
    fontWeight: '600',
    color: TEXT_PRIMARY,
    marginBottom: MARGIN_LG,
  },
  bioText: {
    fontSize: FONT_SIZE_MD,
    color: TEXT_SECONDARY,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING_SM,
  },
  skillTag: {
    backgroundColor: PRIMARY_LIGHT,
    paddingHorizontal: PADDING_MD,
    paddingVertical: SPACING_SM,
    borderRadius: BORDER_RADIUS_ROUND,
    marginBottom: MARGIN_SM,
  },
  skillText: {
    fontSize: FONT_SIZE_SM,
    color: PRIMARY,
    fontWeight: '500',
  },
  menuContainer: {
    gap: SPACING_SM,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: PADDING_LG,
    paddingHorizontal: PADDING_MD,
    backgroundColor: BACKGROUND_SECONDARY,
    borderRadius: BORDER_RADIUS,
    marginBottom: MARGIN_SM,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    fontSize: FONT_SIZE_LG,
    marginRight: MARGIN_MD,
    width: 24,
    textAlign: 'center',
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: FONT_SIZE_MD,
    fontWeight: '500',
    color: TEXT_PRIMARY,
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: FONT_SIZE_SM,
    color: TEXT_SECONDARY,
  },
  menuArrow: {
    fontSize: FONT_SIZE_XL,
    color: TEXT_TERTIARY,
    fontWeight: 'bold',
  },
  logoutSection: {
    paddingHorizontal: SCREEN_PADDING,
    paddingVertical: SPACING_XXL,
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    height: BUTTON_HEIGHT,
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING_XXL,
  },
  logoutText: {
    fontSize: FONT_SIZE_MD,
    fontWeight: '600',
    color: WHITE,
  },
});

export default ProfileScreen