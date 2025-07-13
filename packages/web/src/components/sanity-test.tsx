'use client';

import { useEffect, useState } from 'react';
import { getPosts, getTags, type Post, Tag, testSanityConnection } from '@/lib/sanity-queries';

export function SanityTest() {
    const [connectionStatus, setConnectionStatus] = useState<'testing' | 'connected' | 'failed'>('testing');
    const [tags, setTags] = useState<Tag[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function test() {
            const connected = await testSanityConnection();
            setConnectionStatus(connected ? 'connected' : 'failed');

            if (connected) {
                const fetchedPosts = await getPosts();
                const fetchedTags = await getTags();
                setPosts(fetchedPosts);
                setTags(fetchedTags);
            }
        }

        test();
    }, []);

    return (
        <div className="border rounded-lg p-4 mt-4">
            <h3 className="font-semibold mb-2">Sanity Connection Test</h3>
            <div className="space-y-2">
                <div>
                    Status:{' '}
                    <span
                        className={`font-medium ${
                            connectionStatus === 'connected'
                                ? 'text-green-600'
                                : connectionStatus === 'failed'
                                  ? 'text-red-600'
                                  : 'text-yellow-600'
                        }`}
                    >
                        {connectionStatus === 'testing'
                            ? 'Testing...'
                            : connectionStatus === 'connected'
                              ? '✅ Connected'
                              : '❌ Failed'}
                    </span>
                </div>

                {connectionStatus === 'connected' && (
                    <div>
                        <div className="text-sm text-gray-600">Found {tags.length} tags</div>
                        <div className="text-sm text-gray-600">Found {posts.length} posts</div>
                        {posts.length > 0 && (
                            <ul className="text-sm mt-2 space-y-1">
                                {posts.map((post) => (
                                    <li key={post._id} className="pl-2 border-l-2 border-gray-200">
                                        {post.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

