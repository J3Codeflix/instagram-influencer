export interface User {
    position: number,
    user : {
        username: string,
        full_name: string,
        profile_pic_url: string,
        biography: string,
        follower_count: number,
        following_count: number,
        is_private: boolean,
        post_count: number,
        edges: [],
        total_comment_count: number,
        total_likes_count: number,
        engagement_rate: number,
    }
}