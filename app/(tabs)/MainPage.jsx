import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function MainPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>위트</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Section 1: 나와 딱 맞는 동행 찾기 */}
      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>나와 딱 맞는 동행 찾기</Text>
      </TouchableOpacity>
      <View style={styles.fullCard}>
        <Text style={styles.cardText}>폴더</Text>
        <View style={styles.addIconContainer}>
          <Text style={styles.addIcon}>+</Text>
        </View>
      </View>

      {/* Section 2: Shorts */}
      <Text style={styles.sectionTitle}>Shorts</Text>
      <View style={styles.shortsContainer}>
        <View style={styles.shortsItem}>
          <Text style={styles.addIcon}>+</Text>
        </View>
        <View style={styles.shortsItem}></View>
      </View>

      {/* Section 3: 최신 여행 정보 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>○○ 최신 여행 정보</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoCard}>
        <Text>최신 커뮤니티 글</Text>
        <Text>프로필 사진, 닉네임, 작성 시간, 글 내용, 좋아요 수, 댓글 수, 조회수</Text>
      </View>
      <View style={styles.infoCard}>
        <Text>최신 커뮤니티 글</Text>
        <Text>프로필 사진, 닉네임, 작성 시간, 글 내용, 좋아요 수, 댓글 수, 조회수</Text>
      </View>

      {/* Section 4: 배너 */}
      <View style={styles.banner}>
        <Text>배너</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    padding: 8,
  },
  profileIcon: {
    fontSize: 20,
  },
  linkButton: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  linkText: {
    fontSize: 16,
  },
  fullCard: {
    backgroundColor: "#e0e0e0",
    height: 150,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    top: 16,
    right: 16,
  },
  addIconContainer: {
    backgroundColor: "#ccc",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom:5,
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  shortsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  shortsItem: {
    backgroundColor: "#e0e0e0",
    height: 100,
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  infoCard: {
    backgroundColor: "#f5f5f5",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  banner: {
    backgroundColor: "#f0f0f0",
    height: 100,
    marginHorizontal: 16,
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
